#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include <MFRC522.h>
#include <SPI.h>
#include <Wire.h>
 
#define AWS_IOT_PUBLISH_TOPIC   "esp32/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "esp32/sub"

#define RFID_SS_SDA   21
#define RFID_RST      14

int LED = 36;
char* h;

MFRC522 rfidBase = MFRC522(RFID_SS_SDA, RFID_RST);

// Classe relacionada à leitura do RFID, consegue declarar variáveis públicas, a serem utilizadas em qualquer lugar do código e podendo ser instaciadas
class LeitorRFID{
  private:
    char codigoRFIDLido[100] = "";
    char codigoRFIDEsperado[100] = "";
    MFRC522 *rfid = NULL;
    int cartaoDetectado = 0;
    int cartaoJaLido = 0;
    // Processa o Código lido do RFID e o tempo
    void processaCodigoLido(){
      char codigo[3*rfid->uid.size+1];
      codigo[0] = 0;
      char temp[10];  
      for(int i=0; i < rfid->uid.size; i++){
        sprintf(temp,"%X",rfid->uid.uidByte[i]);
        strcat(codigo,temp);
      }
      codigo[3*rfid->uid.size+1] = 0;    
      strcpy(codigoRFIDLido,codigo);
      Serial.println(codigoRFIDLido);
    }
  // Inicialização do PCD e print de atributos do leitor
  public:
    LeitorRFID(MFRC522 *leitor){
      rfid = leitor;
      rfid->PCD_Init(); 
      Serial.printf("MOSI: %i MISO: %i SCK: %i SS: %i\n",MOSI,MISO,SCK,SS);
    };
    // Leitura do Tipo do Cartão
    char *tipoCartao(){
      MFRC522::PICC_Type piccType = rfid->PICC_GetType(rfid->uid.sak);
      Serial.println(rfid->PICC_GetTypeName(piccType));
      return((char *)rfid->PICC_GetTypeName(piccType));
    };
    int cartaoPresente(){
      return(cartaoDetectado);
    };
    int cartaoFoiLido(){
      return(cartaoJaLido);
    };

    void leCartao(){
      if (rfid->PICC_IsNewCardPresent()) { // Nova tag disponivel
        Serial.println("Cartao presente");
        cartaoDetectado = 1;
        if (rfid->PICC_ReadCardSerial()) { // O id foi lido   
          Serial.println("Cartao lido");  
          cartaoJaLido = 1;
          processaCodigoLido();
          rfid->PICC_HaltA(); 
          rfid->PCD_StopCrypto1(); 
        }
      }else{
        cartaoDetectado = 0;
      }
    };
    char *cartaoLido(){
      return(codigoRFIDLido);
    };
    // Define as variáveis com o valor igual a 0 com a finalidade de resetar
    void resetarLeitura(){
      cartaoDetectado = 0;
      cartaoJaLido = 0;
    }
    void listI2CPorts(){
      Serial.println("\nI2C Scanner");
      byte error, address;
      int nDevices;
      Serial.println("Scanning...");
      nDevices = 0;
      for(address = 1; address < 127; address++ ) {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();
        if (error == 0) {
          Serial.print("I2C device found at address 0x");
          if (address<16) {
            Serial.print("0");
          }
          Serial.println(address,HEX);
          nDevices++;
        }
        else if (error==4) {
          Serial.print("Unknow error at address 0x");
          if (address<16) {
            Serial.print("0");
          }
          Serial.println(address,HEX);
        }    
      }
      if (nDevices == 0) {
        Serial.println("No I2C devices found\n");
      }
      else {
        Serial.println("done\n");
      }
    };
};
LeitorRFID *leitor = NULL;



///////////////////////////////////////////////////////////////////// 
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);
 
void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Connecting to Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
 
  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Create a message handler
  client.setCallback(messageHandler);
 
  Serial.println("Connecting to AWS IOT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }
 
  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("AWS IoT Connected!");
  
}
 
void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["luminosidade"] = h;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}
 
void setup()
{
  Serial.begin(115200);
  connectAWS();
  SPI.begin();
  pinMode(LED, OUTPUT);
  leitor = new LeitorRFID(&rfidBase);
}
 
void loop()
{
  //leitura do cartão
  Serial.println("Lendo Cartao:");
  leitor->leCartao();
  //se o cartão foi lido
  if(leitor->cartaoFoiLido()){
    //printa o tipo do cartão
    Serial.println(leitor->tipoCartao());
    // printa o id do cartão
    Serial.println(leitor->cartaoLido());
    h=leitor->cartaoLido();
    publishMessage();
    
    leitor->resetarLeitura();
    //acende o led
    digitalWrite(LED,HIGH);
    delay(2000);
    //apaga o led
    digitalWrite(LED,LOW);
    delay(1000);
  }
  client.loop();
  
 
  // if (isnan(h))  // Check if any reads failed and exit early (to try again).
  // {
  //   Serial.println(F("Failed to read from DHT sensor!"));
  //   return;
  // }
 

}

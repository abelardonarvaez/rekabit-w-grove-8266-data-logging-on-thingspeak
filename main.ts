input.onButtonPressed(Button.A, function () {
    Number2 += 1
    esp8266.uploadThingspeak(
    "",
    Number2,
    10
    )
    if (esp8266.isThingspeakUploaded()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Number2 = 0
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
basic.showString("Init")
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
esp8266.connectWiFi("", "")
basic.showString("Connecting")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
Number2 = 0
basic.forever(function () {
	
})

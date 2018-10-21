# Hack Display Date Time

A *Phonegap Build* simple example to display the date and time using `cli-6.0.0`, and minimal CSS & Javascript. It may use the Gooogle *Text to Speech* cloud service.

In addition, this example app uses `cordova-plugin-device`.

* https://www.npmjs.com/package/cordova-plugin-device
* https://www.npmjs.com/package/cordova-plugin-screen-orientation
* https://www.npmjs.com/package/cordova-plugin-texttospeech

## Reference for Date object

* https://www.w3schools.com/jsref/jsref_obj_date.asp


## Supported Voices

To use the other voices the plugin will need to be updated.

```
Language 	Voice type 	Language code 	Voice name 		SSML Gender
English (US) 	Standard 	en-US 		en-US-Standard-B 	MALE
English (US) 	Standard 	en-US 		en-US-Standard-C 	FEMALE
English (US) 	Standard 	en-US 		en-US-Standard-D 	MALE
English (US) 	Standard 	en-US 		en-US-Standard-E 	FEMALE
```

A complete list of voices is available here:

https://cloud.google.com/text-to-speech/docs/voices

The other voices include: Dutch, English (Australia, US, UK), French, German, Italian, Japanese, Korean, Portugese, Spanish, Swedish, & Turkish. 

### SSML End Points

https://cloud.google.com/text-to-speech/docs/reference/rest/v1/voices/list

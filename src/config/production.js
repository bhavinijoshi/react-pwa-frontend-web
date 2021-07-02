export default {
  env: 'production',
  REACT_APP_BACKEND_URL:
    'https://prd-api-safetyassist.azurewebsites.net/api',
  REACT_APP_CHATSERVER_URL:
    'https://prd-cht-safetyassist.azurewebsites.net',
  REACT_APP_MAPBOX_TOKEN: 'pk.eyJ1IjoiZGV2LWVudGVsZWdpcyIsImEiOiJja2FwaXU3a2gxN2U0MnlybW9ybXpiYmRxIn0.DujJ5HITkE9qXivdVv0UnA',
  REACT_APP_GOOGLE_PLACES_API_KEY: 'AIzaSyCnM36YR_tPu9NYOPp936i5EtFnbDmu6v8',
  REACT_APP_SAS: '?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-04-01T14:50:35Z&st=2020-05-21T06:50:35Z&sip=0.0.0.0-255.255.255.255&spr=https&sig=XMaqcZ1n5buO0zGWA8ToZbku4jSA1VVtRnHwYbfPbdQ%3D',
  REACT_APP_AZURE_HOST_URL: 'https://safetyassist.blob.core.windows.net/',
  REACT_APP_SERVER_LOG_STREAM_URL: 'https://portal.azure.com/#@jasonentelegis794.onmicrosoft.com/resource/subscriptions/48d0f5da-1266-4d5e-bb04-f862b4dc1047/resourceGroups/SafetyAssist/providers/Microsoft.Web/sites/prd-api-safetyassist/logStream',
  REACT_APP_SECRET_KEY: "oU'MaNZS~t;Ki7gfw]OU[~>safety-assistVKs_R%.B|0q{CYwej6`b|+)!?lo)Hk$9m5)_9~qx",
  REACT_APP_NOT_SECRET_CODE: process.env.REACT_APP_NOT_SECRET_CODE,
  REACT_APP_NOT_SECRET_CODE2: process.env.REACT_APP_NOT_SECRET_CODE2
};

import {
    withInfoPlist,
    withAndroidManifest,
    AndroidConfig,
    ConfigPlugin,
  } from 'expo/config-plugins';
  

const withCustomInfoPlistEntries: ConfigPlugin<{ google_ads_id: string }>= (config,  { google_ads_id } ) => {

    config = withInfoPlist(config, config => {
      if (!config.modResults) config.modResults = {};
      config.modResults = {
        ...config.modResults,
        GADApplicationIdentifier: "ca-app-pub-8580172702033882~4553815229",
        SKAdNetworkItems: [{ SKAdNetworkIdentifier: "cstr6suwn9.skadnetwork" }]
      };
      return config;
    });
    return config;
};

export default withCustomInfoPlistEntries;




//   const withMyApiKey: ConfigPlugin<{ apiKey: string }> = (config, { apiKey }) => {
//     config = withInfoPlist(config, config => {
//       config.modResults['MY_CUSTOM_API_KEY'] = apiKey;
//       return config;
//     });
//     config = withAndroidManifest(config, config => {
//       const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults); 
//       AndroidConfig.Manifest.addMetaDataItemToMainApplication(
//         mainApplication,
//         'MY_CUSTOM_API_KEY',
//         apiKey
//       );
//       return config;
//     });
//     return config;
//   };
//   export default withMyApiKey;

// config = withAndroidManifest(config, async config => {
//     config.modResults = await setCustomConfigAsync(config, config.modResults);
//     return config;
//   });

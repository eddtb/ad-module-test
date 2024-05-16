import ExpoModulesCore
import GoogleMobileAds

public class GoogleAdsAppDelegateSubscriber: ExpoAppDelegateSubscriber {
  public func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]?) -> Bool {
    GADMobileAds.sharedInstance().start(completionHandler: nil)
    return true
  }
}

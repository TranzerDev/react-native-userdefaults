package com.reactnativeuserdefaults

import android.content.Context
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class UserdefaultsModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "Userdefaults"
  }

  @ReactMethod
  fun set(value: String, key: String) {
    val sharedPref = currentActivity?.getPreferences(Context.MODE_PRIVATE)

    with (sharedPref!!.edit()) {
      putString(key, value)
      apply()
    }
  }

  @ReactMethod
  fun get(key: String, promise: Promise) {
    val sharedPref = currentActivity?.getPreferences(Context.MODE_PRIVATE)
    val sharedPrefValue = sharedPref!!.getString(key, null)
    promise.resolve(sharedPrefValue)
  }

  @ReactMethod
  fun remove(key: String) {
    val sharedPref = currentActivity?.getPreferences(Context.MODE_PRIVATE)

    with (sharedPref!!.edit()) {
      remove(key)
      apply()
    }
  }
}

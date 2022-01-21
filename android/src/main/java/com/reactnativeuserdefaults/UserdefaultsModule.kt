package com.reactnativeuserdefaults

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class UserdefaultsModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {
  private var sharedPref: SharedPreferences? = currentActivity?.getPreferences(Context.MODE_PRIVATE)

  override fun getName(): String {
    return "Userdefaults"
  }

  @ReactMethod
  fun set(value: String, key: String) {
    with (sharedPref!!.edit()) {
      putString(key, value)
      apply()
    }
  }

  @ReactMethod
  fun get(key: String, promise: Promise) {
    val sharedPrefValue = sharedPref!!.getString(key, null)
    promise.resolve(sharedPrefValue)
  }

  @ReactMethod
  fun remove(key: String) {
    with (sharedPref!!.edit()) {
      remove(key)
      apply()
    }
  }
}

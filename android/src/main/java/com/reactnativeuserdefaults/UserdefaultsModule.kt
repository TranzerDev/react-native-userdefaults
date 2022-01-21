package com.reactnativeuserdefaults

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class UserdefaultsModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {
  private var sharedPref: SharedPreferences? = currentActivity?.getPreferences(Context.MODE_PRIVATE)

  override fun getName(): String {
    return "Userdefaults"
  }

  fun set(key: String, value: String) {
    with (sharedPref!!.edit()) {
      putString(key, value)
      apply()
    }
  }

  fun get(key: String, promise: Promise) {
    val sharedPrefValue = sharedPref!!.getString(key, null)
    promise.resolve(sharedPrefValue)
  }

  fun remove(key: String) {
    with (sharedPref!!.edit()) {
      remove(key)
      apply()
    }
  }
}

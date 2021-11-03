package com.biercellar;

import com.facebook.react.ReactActivity;

// React Navigation
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BierCellar";
  }

  // React Navigation
  @Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}

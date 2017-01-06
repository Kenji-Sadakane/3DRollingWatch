package com.keepingrack.a3drollingwatch;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import org.xwalk.core.XWalkView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        XWalkView mXWalkView = (XWalkView) findViewById(R.id.webView);
        mXWalkView.load("file:///android_asset/index.html", null);
    }
}

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SigninView from './examples/signInUp/signinView';
import SignupView from './examples/signInUp/signupView';
import Examples from './examples/examples';
import AvatarExample from './examples/avatarExample';
import ImageCropPick from './examples/imgCropPick';
import ChatExample from './examples/chatExample';
import PlaceholderExample from './examples/placeholderExample';
import WebViewExample from './examples/webView';
import ImageAdvExample from './examples/imageAdv';
import FacePPExample from './examples/faceppExample';
import AudioExample from './examples/audioExample';
import SoundExample from './examples/soundExample';

export const Root = StackNavigator({
	signin : {
		screen: SigninView,
	},
	signup : {
		screen: SignupView,
	},
	examples : {
		screen: Examples
	},
	avatarExamples : {
		screen: AvatarExample
	},
	imageCropPick: {
		screen: ImageCropPick
	},
	chatExamples: {
		screen: ChatExample
	},
	placeholderExample: {
		screen: PlaceholderExample
	},
	webViewExample: {
		screen: WebViewExample
	},
	imageAdvExample: {
		screen: ImageAdvExample
	},
	faceppExample: {
		screen: FacePPExample
	},
	audioExample: {
		screen: AudioExample
	},
	soundExample: {
		screen: SoundExample
	}
});
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Examples from './examples/examples';
import AvatarExample from './examples/avatarExample';
import ImageCropPick from './examples/imgCropPick';
import ChatExample from './examples/chatExample';
import PlaceholderExample from './examples/placeholderExample';
import WebViewExample from './examples/webView';
import ImageAdvExample from './examples/imageAdv';

export const Root = StackNavigator({
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
	}
});
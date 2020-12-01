import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as P1 from '../lib/p1-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new P1.P1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});

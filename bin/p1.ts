#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { P1Stack } from '../lib/p1-stack';

const app = new cdk.App();
new P1Stack(app, 'P1Stack');

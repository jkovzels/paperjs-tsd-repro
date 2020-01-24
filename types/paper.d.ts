import {WriteStream} from 'fs';

declare module 'paper' {
	interface View {
		exportImage(path: string, callback: Function): WriteStream;
		exportFrames(options: any): void;
	}
}
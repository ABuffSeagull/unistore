// import React from 'react';
import { createIntegration } from '../../src/index.js';

describe('React intergration', () => {
	it('should export useStore', () => {
		const { useStore } = createIntegration();
	});
});

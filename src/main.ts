import { Button } from 'smelte';
import App from './App.svelte';
import TextInput from './components/TextInput.svelte';



const components = {
	"Text": TextInput,
	"Number": TextInput,
	"Button": Button
}

const app = new App({
	target: document.body,
	props: {
		schema: {
			elements: [
				{ type: "Text", name: 1 },
				{ type: "Number", name: 2 }
			]
		},
		components: components,
		callbacks: {}
	}
});

export default app;
module.exports = plop => {
	plop.setGenerator('component', {
		description: 'Create a component',
		// User input prompts provided as arguments to the template
		prompts: [
			{
				// Raw text input
				type: 'input',
				// Variable name for this input
				name: 'name',
				// Prompt to display on command line
				message: 'What is your component name?'
			},
		],
		actions: [
			{
				// Add a new file
				type: 'add',
				// Path for the new file
				path: 'src/components/{{pascalCase name}}/src/{{pascalCase name}}.ts',
				// Handlebars template used to generate content of new file
				templateFile: 'plop-templates/Component/Component.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/test/{{pascalCase name}}.test.tsx',
				templateFile:
					'plop-templates/Component/Component.test.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/src/{{pascalCase name}}.scss',
				templateFile:
					'plop-templates/Component/Component.scss.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/index.ts',
				templateFile: 'plop-templates/Component/index.ts.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx',
				templateFile:
					'plop-templates/Component/Component.stories.tsx.hbs',
			},
		],
	});
};
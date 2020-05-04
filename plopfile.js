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
				path: 'src/components/{{pascalCase name}}/src/{{pascalCase name}}.tsx',
				// Handlebars template used to generate content of new file
				templateFile: 'plop-templates/Component/src/Component.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/src/{{pascalCase name}}.scss',
				templateFile:
					'plop-templates/Component/src/Component.scss.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/index.ts',
				templateFile: 'plop-templates/Component/src/index.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/test/{{pascalCase name}}.test.tsx',
				templateFile:
					'plop-templates/Component/test/Component.test.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx',
				templateFile:
					'plop-templates/Component/stories/Component.stories.tsx.hbs',
			},
			{
				type: 'add',
				path:
					'src/components/{{pascalCase name}}/stories/story/{{pascalCase name}}.story.tsx',
				templateFile:
					'plop-templates/Component/stories/story/Component.story.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/subcomponents/ExampleSubcomponent.tsx',
				templateFile:
					'plop-templates/Component/src/subcomponents/ExampleSubcomponent.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/subcomponents/index.ts',
				templateFile: 'plop-templates/Component/src/subcomponents/indexForSubcomponents.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/types/ExampleType.tsx',
				templateFile:
					'plop-templates/Component/src/types/Type.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/types/index.ts',
				templateFile: 'plop-templates/Component/src/types/indexForTypes.ts.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/utils/ExampleUtil.tsx',
				templateFile:
					'plop-templates/Component/src/utils/ExampleUtil.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/components/{{pascalCase name}}/src/utils/index.ts',
				templateFile:
					'plop-templates/Component/src/utils/indexForUtils.ts.hbs',
			}
		],
	});
};
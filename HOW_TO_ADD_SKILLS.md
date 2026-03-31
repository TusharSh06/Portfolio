# How to Add New Skills to the Marquee

To add more skills to your scrolling marquee in the Skills section, you need to update two places in the `src/components/Skills.jsx` file.

## Step 1: Import the new Icon
First, find the exact icon you want to use from the `react-icons/si` (Simple Icons) collection. You can search for all available icons on the [React Icons website](https://react-icons.github.io/react-icons/icons/si/).

Look near line 19 for the imports, and add the name of your new icon to the destructured list. 

For example, if you wanted to add **Python** and **Docker**, you would import `SiPython` and `SiDocker`:

```jsx
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiCplusplus,
  SiGit, SiGithub, SiVercel, 
  SiPython, SiDocker // <-- Add your new icon imports here at the end
} from 'react-icons/si'
```

## Step 2: Add it to your `techStack` Array
Right below the imports, you'll see the `const techStack = [...]` array. Simply add a new object for your skill at the bottom of the list. Provide the exact icon function you just imported and a color class of your choice using standard Tailwind text colors.

```jsx
  const techStack = [
    // ... existing skills ...
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-white' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white' },

    // Add your new skills like this:
    { name: 'Python', icon: SiPython, color: 'text-yellow-300' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' }
  ]
```

That's it! Because of how the marquee automatically measures and loops the items in that array, your new skills will seamlessly join the scrolling animation with their shiny new colors.

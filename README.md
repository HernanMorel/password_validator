# Password Validation App

## Get Started

The application includes components for managing and validating passwords based on specific criteria. Users can interact with the application by entering passwords, and the application provides feedback on whether the password meets the required criteria. The project also emphasizes reusability, maintainability, and separation of concerns through the use of components, TypeScript, CSS modules, and custom hooks. Additionally, a skeleton preloader is implemented to enhance the initial loading experience. The project mimics password requirements for various EHR (Electronic Health Record) software systems, such as Epic, Cerner, and Allscripts, by matching fonts and colors.

## Lessons Learned

This project journey began with a clear understanding of the core purpose of the password validator. Extensive planning and wireframing efforts were put in to design a dynamic and user-friendly app.

The initial concept involved displaying the four login containers side by side on a single page. However, this approach lacked fluidity and cohesiveness. The challenge was to present separate UIs without overwhelming the user.

To address this, Ant Design's Carousel component was employed. It offered the flexibility to inject custom designs for each login item. While typically used for images, it was adapted to house input fields and descriptions within individual cards.

During the development phase, an issue emerged - a slight but noticeable flicker on the initial UI render. This was caused by the Ant Design library adapting to Next.js upon loading. To enhance user experience, the \_document.tsx file provided by Next.js was customized to preload all necessary styles, resolving the flicker issue.

## Potential Future Features

- This mock app serves as a demonstration of best practices in structuring a web application for password validation. While it may not be intended for production use, its architectural decisions can be valuable in real-world scenarios. The project showcases a component-based structure where styles are passed as props and leverages TypeScript for type safety. Custom hooks efficiently manage data and interactions.

- This flexible structure can be extended to include additional form fields for user sign-up, such as first and last names, email addresses, and more. The regex-based validation can be expanded to accommodate these criteria easily. Overall, this project serves as a foundation for building robust and maintainable form validation components in real-world applications.

## Deployment

[This is an external link to the app]()

# Clone this repository

$ git clone https://github.com/HernanMorel/password_validator

# Go to repository

```

$ cd password_validator

```

# Remove current origin repository

```

$ git remote remove origin

```

# Install dependencies

```

$ npm install

#or

$ yarn install

```

# Start development server

```

$ npm run dev

# or

$ yarn dev

```

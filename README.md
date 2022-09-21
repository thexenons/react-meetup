# Ejercicio 1

La función `getTotal` no es escalable, puesto que la adición de nuevos tipos de servicios implicarían una modificación de la función y, por ende, de la clase.

Se podría dar el caso de que viniese un servicio no contemplado, en ese caso se añadiría el cargo adicional sin cargar el precio del servicio ni tener constancia de la falta de asociación.

Manteniendo el modelo propondría modificar la clase para que reciba a través del constructor una asignación de tipos de servicio a la propiedad en la que se ve referenciado su precio en los datos del contenido. De esta forma aunque se añadan tipos de servicios nuevos, no será necesario modificar el archivo y la responsabilidad caerá en el servicio que maneje los servicios, no el que maneja los usuarios.

```javascript
const SERVICE_TYPE_TO_CONTENT_PRICE_PROP = {
  StreamingService: "streamingPrice",
  DownloadService: "downloadPrice",
};

class RegisteredUser {
  constuctor(
    services = [],
    serviceTypeToContentPriceProp = SERVICE_TYPE_TO_CONTENT_PRICE_PROP
  ) {
    this.services = services;
    this.serviceTypeToContentPriceProp = serviceTypeToContentPriceProp;
  }

  getTotal() {
    let total = 0;

    this.services.forEach((service) => {
      const multimediaContent = service.getMultimediaContent();
      const serviceType = typeof service;
      const contentPriceProp = this.serviceTypeToContentPriceProp[serviceType];

      if (contentPriceProp && multimediaContent[contentPriceProp]) {
        total += multimediaContent[contentPriceProp];

        if (typeof multimediaContent === PremiumContent) {
          total += multimediaContent.additionalFee;
        }
      } else {
        throw new Error(
          "[RegisteredUser] Unknown service type: " + serviceType
        );
      }
    });

    return total;
  }
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

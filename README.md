# Angular Products Management App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.  

This is a simple Angular web application designed to manage a list of electronic products and their associated tags. Users can view a list of products, access detailed information about each product, and perform actions such as creating, updating, and deleting products and tags. The application also allows users to filter products by tags.

## Features
- View a list of electronic products with associated tags.
- Access detailed information about each product, including tags, description, and price.
- Create new products and tags.
- Update existing products and tags.
- Delete products and tags.
- Filter products by tags.
- Search for products by name.

## Getting Started
Follow these instructions to run the application locally:  

1. Clone the repository to your local machine:
```
git clone https://github.com/your-username/angular-products-management.git
cd angular-products-management
```
2. Install the project dependencies:
```
npm install
```
3. Run the application:
```
npm start
```
Open your browser and navigate to http://localhost:4200/ to view the application.  

## Data Source
The application simulates data retrieval from a server by using a local **products.json** file located in the **assets** folder. The electronic products are stored in this JSON file.  

## Code Structure
The project follows a modular structure:
- Components: The components folder contains three main subfolders: product, tag, and UI. The UI folder includes reusable components such as buttons.
- Services: The services folder contains services for managing business logic related to products and tags. Local data is updated and deleted within the application.
- Design: The design is responsive, adapting to different screen sizes.

## Notable Decisions
- UUID Generation: The UUID package is used to generate unique identifiers for tags.
- Validation: Basic field validation is implemented.
- Confirmation Dialogs: Confirmation dialogs are provided before critical actions like deleting a product.

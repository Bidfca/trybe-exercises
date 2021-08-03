const fs = require('fs');
const ProductModel = require('../models/productModel');
const faker = require('faker');
jest.mock('fs');

describe('Product Model', () => {
    describe('Get all products', () => {
        test('When getting all products, should return an array with all the available products', () => {
            const mockData = JSON.stringify([
                {
                    id: 1,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
                {
                    id: 2,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
                {
                    id: 3,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
            ]);

            fs.readFileSync = jest.fn().mockReturnValueOnce(mockData);
            const res = ProductModel.getAll();
            expect(res).toStrictEqual(JSON.parse(mockData));
            fs.readFileSync.mockRestore();
        });
    });

    describe('Get product by ID', () => {
        test('When sending ID 1 as parameter, should only the product with id 1 be returned', () => {
            const mockData = JSON.stringify([
                {
                    id: 1,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
                {
                    id: 2,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
                {
                    id: 3,
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
            ]);
            fs.readFileSync = jest.fn().mockReturnValueOnce(mockData);
            const res = ProductModel.getById(1);
            expect(res).toStrictEqual(JSON.parse(mockData)[0]);
        });
    });

    test('When sending ID 4 as parameter, should return undefined, since theres no product with id 4', () => {
      const mockData = JSON.stringify([
        {
          id: 1,
          name: faker.commerce.productName(),
          brand: faker.commerce.productMaterial(),
        },
        {
          id: 2,
          name: faker.commerce.productName(),
          brand: faker.commerce.productMaterial(),
        },
        {
          id: 3,
          name: faker.commerce.productName(),
          brand: faker.commerce.productMaterial(),
        },
      ]);
      fs.readFileSync = jest.fn().mockReturnValue(mockData);
      const res = ProductModel.getById(4);
      expect(res).toStrictEqual(undefined);
    });

    test('When sending ID 4 as parameter, should return undefined, since theres no product with id 4', () => {
        const mockData = JSON.stringify([
          {
            id: 1,
            name: faker.commerce.productName(),
            brand: faker.commerce.productMaterial(),
          },
          {
            id: 2,
            name: faker.commerce.productName(),
            brand: faker.commerce.productMaterial(),
          },
          {
            id: 3,
            name: faker.commerce.productName(),
            brand: faker.commerce.productMaterial(),
          },
        ]);
        fs.readFileSync = jest.fn().mockReturnValue(mockData);
        const res = ProductModel.getById(4);
        expect(res).toStrictEqual(undefined);
      });

      describe('Add product', () => {
        test('When adding a new Product, should write in the file and return the created product', () => {
          const mockData = [
            {
              id: 1,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
            {
              id: 2,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
            {
              id: 3,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
          ];
        });

        fs.readFileSync = jest.fn().mockReturnValue(JSON.parse(mockData));

        fs.writeFile = jest.fn();

        const newProduct = {
            id: 4,
            name: faker.commerce.productName(),
            brand: faker.commerce.productMaterial(),
          };

          const res = ProductModel.add(newProduct.name, newProduct.brand);

          mockData.push(newProduct);

          expect(fs.writeFile).toHaveBeenCalledWith(
              './products.json',
              JSON.stringify(mockData),
              'utf8',
              expect.any(Function)
          );

          expect(res.id).toStrictEqual(4);

          test('When something went wrong while writing the file, should throw an error', () => {
            const mockData = [
              {
                id: 1,
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial(),
              },
              {
                id: 2,
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial(),
              },
              {
                id: 3,
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial(),
              },
            ];

            fs.readFileSync = jest.fn().mockReturnValue(JSON.parse(mockData));

            let callback;

            jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
                callback = cb;
            });

            const err = 'something went wrong';

            const newProduct = {
                id: 1,
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial(),
              };

              ProductModel.add(newProduct.name, newProduct.brand);

              expect(fs.writeFile).toHaveBeenCalled();

              expect(() => callback(err)).toThrowError(err);
        });
    });

    describe('Delete product by id', () => {
        test('When deleting a product with ID 1, should write in the file the products without the one with ID 1 and the file content after deletion', () => {
          const mockData = [
            {
              id: 1,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
            {
              id: 2,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
            {
              id: 3,
              name: faker.commerce.productName(),
              brand: faker.commerce.productMaterial(),
            },
          ];

          fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));

          fs.writeFile = jest.fn();

          const deleteResponse = ProductModel.remove(1);
          const expectedProductsAfterDeletion = [mockData[1], mockData[2]];

          expect(fs.writeFile).toHaveBeenCalledWith(
              './products.json',
              JSON.stringify(expectedProductsAfterDeletion),
              'utf8',
              expect.any(Function)
          );

          expect(deleteResponse.length).toBe(2);
          expect(deleteResponse[0].id).toBe(2);
          expect(deleteResponse[1].id).toBe(3);
        });
    });
});
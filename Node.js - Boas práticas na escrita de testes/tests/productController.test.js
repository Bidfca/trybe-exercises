const ProductModel = require('../models/productModel');
const controller = require('../controllers/productController');
const faker = require('faker');

describe('ProductController', () => {
    describe('Get all products', () => {
        test('When requesting all products, should return a JSON with all the available products', () => {
            const mockData = {
                data: [
                    {
                        id: 1,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 2,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                ],
            };

            const getAllSpy = jest
                .spyOn(ProductModel, 'getAll')
                .mockReturnValueOnce(mockData);

            const mockReq = {};

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.getAllProducts(mockReq, mockRes);
            expect(getAllSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockData);
            getAllSpy.mockRestore();
        });
    });

    describe('Get product by id', () => {
        test('When requesting a product with the id 1, should return a single product with ID equal to 1', () => {
            const mockData = {
                data: [
                    {
                        id: 1,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 2,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 3,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                ],
            };

            const getByIdSpy = jest.spyOn(ProductModel, 'getById')
                .mockReturnValueOnce(mockData.data[0]);

            const mockReq = {
                params: {
                    id: 1,
                }
            };

            mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.getProductById(mockReq, mockRes);
            expect(getByIdSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockData.data[0]);
            getByIdSpy.mockRestore();
        });

        test('When requesting a product with the id 5, should return a 404 and a error message since the id does not exists', () => {
            const getByIdSpy = jest
                .spyOn(ProductModel, 'getById')
                .mockReturnValueOnce(null);

            const mockReq = {
                params: {
                    id: 5,
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            controller.getProductById(mockReq, mockRes);
            expect(getByIdSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(404);
            expect(mockRes.send).toBeCalledWith({
                message: 'Produto não encontrado',
            });

            getByIdSpy.mockRestore();
        });

    });

    describe('Create Product', () => {
        test('When creating a product, should return a 200 with the create product', () => {
            const mockData = {
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial()
            };

            const addProductSpy = jest
                .spyOn(ProductModel, 'add')
                .mockReturnValueOnce(mockData);

            const mockReq = {
                body: mockData,
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.createProduct(mockReq, mockRes);
            expect(addProductSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockData);
            addProductSpy.mockRestore();
        });

        test('When something went wrong, should return a 500 with and error message', () => {
            const mockData = {
                id: null,
                name: faker.commerce.productName(),
                brand: faker.commerce.productMaterial(),
            };

            const addProductSpy = jest.spyOn(ProductModel, 'add')
                .mockImplementation(() => {
                    throw new Error();
                });

            const mockReq = {
                body: mockData,
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };

            controller.createProduct(mockReq, mockRes);
            expect(addProductSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(500);
            expect(mockRes.send).toBeCalledWith({
                message: 'Algo deu errado',
            });

            addProductSpy.mockRestore();
        });
    });

    describe('Delete Product by id', () => {
        test('When deleting a product with id 1, should return a 200 with the remaining products', () => {
            const mockData = {
                data: [
                    {
                        id: 1,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 2,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 3,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                ],
            };

            const deleteProductSpy = jest
                .spyOn(ProductModel, 'remove')
                .mockReturnValueOnce([mockData[1], mockData[2]]);

            const mockReq = {
                params: {
                    id: 1,
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.deleteProductById(mockReq, mockRes);
            expect(deleteProductSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith([mockData[1], mockData[2]]);
            deleteProductSpy.mockRestore();
        });

        test('When deleting a product with a unexistent id, should return a 200 with an array with all the products and no deletion', () => {
            const deleteProductSpy = jest
                .spyOn(ProductModel, 'remove')
                .mockReturnValueOnce([]);

            const mockReq = {
                params: {
                    id: 5,
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.deleteProductById(mockReq, mockRes);
            expect(deleteProductSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith([]);
            deleteProductSpy.mockRestore();
        });
    });

    describe('Edit Product by id', () => {
        test('When editing a product with id 1, should return a 200 with an array with all the products and the one edited', () => {
            const mockData = {
                data: [
                    {
                        id: 1,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 2,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                    {
                        id: 3,
                        name: faker.commerce.productName(),
                        brand: faker.commerce.productMaterial()
                    },
                ],
            };

            const editProductByIdSpy = jest
                .spyOn(ProductModel, 'addOrUpdate')
                .mockReturnValueOnce(mockData);

            const mockReq = {
                params: {
                    id: 1,
                },
                body: {
                    name: faker.commerce.productName(),
                    brand: faker.commerce.productMaterial(),
                },
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            controller.editProductById(mockReq, mockRes);
            expect(editProductByIdSpy).toBeCalledTimes(1);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockData);
            editProductByIdSpy.mockRestore();
        });
    });
});
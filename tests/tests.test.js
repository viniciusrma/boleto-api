const request = require("supertest");
const app = require("../src/app");

describe("Boleto de convênio - Casos de sucesso.", () => {
  it("Contém todas as informações.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("expirationDate");
  });

  it("Contém data de vencimento.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
  });

  it("Contém dígitos verificadores corretos.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
  });
});

describe("Boleto de convênio - Casos de erro.", () => {
  it("String numérica, porém inválida.", async () => {
    const res = await request(app).get(
      "/boleto/21290008192110001290904475617405976870000502000"
    );
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("Caracter(es) inválido(s).", async () => {
    const res = await request(app).get(
      "/boleto/21290008192110001290904475617405976870000502000"
    );
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("Quantidade de dígitos inválida.", async () => {
    const res = await request(app).get(
      "/boleto/21290008192110001290904475617405976870000502000"
    );
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});

describe("Boleto de título - Caso de sucesso.", () => {
  it("Contém todas as informações.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("expirationDate");
  });

  it("Dígitos verificadores corretos.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("expirationDate");
  });

  it("Contém data de vencimento.", async () => {
    const res = await request(app).get(
      "/boleto/21290001192110001210904475617405975870000002000"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("validBarCode");
    expect(res.body).toHaveProperty("amount");
    expect(res.body).toHaveProperty("expirationDate");
  });
});

describe('Boleto de título - Caso de erro.', () => {
    it('Caracter(es) inválido(s).', async () => {
        const res = await request(app).get('/boleto/21290001192110001210904475617405975870000E02000');
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('String numérica, porém inválida.', async () => {
        const res = await request(app).get('/boleto/21290001192110001210904475617405975870000E02000');
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('Quantidade de dígitos inválida.', async () => {
        const res = await request(app).get('/boleto/21290001192110001210904475617405975870000E02000');
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });
});

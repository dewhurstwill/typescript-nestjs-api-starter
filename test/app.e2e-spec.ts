import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (Root)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
      });
  });
});


describe('AppController (Not Found Route)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /what-is-this-even (Responds with a not found message)', async () => {
    return request(app.getHttpServer())
      .get('/what-is-this-even')
      .expect(404)
      .expect({
        "statusCode": 404,
        "message": "Cannot GET /what-is-this-even",
        "error": "Not Found"
      });
  });
});

describe('AppController (Helmet Middleware)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Removes x-powered-by from headers', async () => {
    const result = await request(app.getHttpServer()).get('/');
    expect(result.header['content-type']).toContain('application/json');
    expect(result.statusCode).toEqual(200);
    expect(Object.keys(result.headers)).not.toContain('x-powered-by');
  });

  it('Adds security related headers', async () => {
    const result = await request(app.getHttpServer()).get('/');
    expect(Object.keys(result.headers)).toContain('x-dns-prefetch-control');
    expect(Object.keys(result.headers)).toContain('x-frame-options');
    expect(Object.keys(result.headers)).toContain('strict-transport-security');
    expect(Object.keys(result.headers)).toContain('x-download-options');
    expect(Object.keys(result.headers)).toContain('x-content-type-options');
    expect(Object.keys(result.headers)).toContain('x-xss-protection');
  })
});
import { ping } from 'tcp-ping';

describe('Health', () => {
  test('Reservations', async () => {
    const respone = await fetch('http://reservations:3000');
    expect(respone.ok).toBeTruthy();
  });

  test('Auth', async () => {
    const respone = await fetch('http://auth:3001');
    expect(respone.ok).toBeTruthy();
  });

  test('Payments', (done) => {
    ping({ address: 'payments', port: 3003 }, (err) => {
      if (err) fail();
      done();
    });
  });
});

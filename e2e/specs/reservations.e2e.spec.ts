describe('Reservations', () => {
  beforeAll(async () => {
    const user = {
      email: 'tieucuong.hk.23@gmail.com',
      password: '123123',
    };

    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  });

  test('Create', () => {});
});

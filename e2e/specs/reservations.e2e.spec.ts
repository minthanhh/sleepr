describe('Reservations', () => {
  let jwt: string;

  beforeAll(async () => {
    const user = {
      email: 'tieucuong.hk.23@gmail.com',
      password: '123123',
    };

    await fetch('http://auth:3001/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await fetch('http://auth:3001/auth/login', { method: 'POST', body: JSON.stringify(user) });
    jwt = await response.text();
  });

  test('Create', async () => {
    const responseCreate = await fetch('http://reservations:3000/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: jwt,
      },
      body: JSON.stringify({
        startDate: '12-10-2023',
        endDate: '12-10-2023',
        placeId: '123',
        invoiceId: '123',
        charge: {
          amount: 12,
          card: {
            cvc: '321',
            exp_month: 1,
            exp_year: 2023,
            number: '4000 0566 5566 5556',
          },
        },
      }),
    });
    expect(responseCreate.ok).toBeTruthy();

    // const createdReservation = await responseCreate.json();
  });
});

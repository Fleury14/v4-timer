import { parseFlags } from '../helpers';

test('flags parser accepts a flagstring with all types', () => {
  const validFlagObj = parseFlags("Omode:classicforge/1:char_kain/2:boss_antlion/3:quest_zot/random:2/win:crystal Kmain Pshop Crelaxed Twild Swild Bstandard/whyburn Nnone Etoggle Gdupe/mp/warp/life/64 -spoon -vanilla:fusoya");
  expect(validFlagObj).toStrictEqual(
    expect.objectContaining({
      objectives: expect.arrayContaining([
        expect.objectContaining({
          id: expect.anything(),
          label: 'Forge the Crystal',
          time: 0,
        }),
        expect.objectContaining({
          id: expect.anything(),
          label: 'Get Kain',
          time: 0,
        }),
        expect.objectContaining({
          id: expect.anything(),
          label: 'Defeat Antlion',
          time: 0,
        }),
        expect.objectContaining({
          id: expect.anything(),
          label: 'Random objective 1',
          time: 0,
          random: true,
        }),
        expect.objectContaining({
          id: expect.anything(),
          label: 'Random objective 2',
          time: 0,
          random: true,
        }),
        expect.objectContaining({
          id: expect.anything(),
          label: 'Defeat Zeromus',
          time: 0,
        }),
      ])
    })
  )
});

test('flag parser receives nothing, returns nothing', () => {
      const nullFlagObj = parseFlags(null);
      expect(nullFlagObj).toBe(null);
});

test('flag parser receives garbage', () => {
    // anything other than a text string should return null
    const garbage = parseFlags(['garbage']);
    expect(garbage).toBe(null);

    // any random text should at least return zeromus
    const blahText = parseFlags('kjfhlskdfhalk');
    expect(blahText).toStrictEqual(
        expect.objectContaining({
            objectives: expect.arrayContaining([
                expect.objectContaining({
                id: expect.anything(),
                label: 'Defeat Zeromus',
                time: 0,
                }),
            ])
        })
    );
})
import { enjs, jam } from '@urbit/nockjs';
import { Clack, newtDecode, newtEncode, Thread } from './index'
import 'dotenv/config'

const strDate = Date.now().toString(16);
const desk = `%js-created-${strDate.substring(strDate.length - 4)}`;
const ship = process.env.SHIP_DIRECTORY || 'zod';
test('createDesk', async function () {
	const clack = Clack({ ship })
	const noun = await clack.createDesk(desk)
  expect(enjs.cord(noun)).toBe('success');
});

test('mountDesk', async function () {
	const clack = Clack({ ship })
	const noun = await clack.mountDesk(desk)
  expect(enjs.cord(noun)).toBe('success');
});

test('commitDesk', async function () {
	const clack = Clack({ ship })
	const noun = await clack.commitDesk(desk)
  expect(enjs.cord(noun)).toBe('success');
});

test('newt encode', async function () {
	const thread = Thread(`=/  m  (strand ,vase)  ;<  ~  bind:m  (poke [~zod %hood] %helm-hi !>(''))  (pure:m !>('success'))`);
	const jammed = jam(thread);
	const newt = newtEncode(jammed)
	const result = Buffer.from([0x00, 0x8a, 0x00, 0x00, 0x00, 0x19, 0xf0, 0xcd, 0xf2, 0xe4, 0xc8, 0x01, 0x5f, 0x2c, 0x6c, 0xae, 0x1c, 0xc0, 0x63, 0x0d, 0x2d, 0xcc, 0xad, 0xa5, 0xcc, 0x2e, 0x8c, 0x1d, 0xf0, 0xdd, 0xde, 0xea, 0xdc, 0x01, 0x7e, 0xba, 0x32, 0xb2, 0x96, 0x32, 0xbb, 0x30, 0x36, 0x00, 0x1a, 0xec, 0x79, 0x01, 0x01, 0x69, 0x03, 0x01, 0x41, 0x99, 0xa3, 0x93, 0x0b, 0x73, 0x23, 0x03, 0x61, 0xb1, 0x0b, 0x9b, 0x2b, 0x4b, 0x01, 0x01, 0xd9, 0xe1, 0x01, 0x01, 0xf1, 0x03, 0x01, 0x11, 0x4b, 0x73, 0x23, 0xd3, 0x69, 0x03, 0x01, 0x41, 0x81, 0x7b, 0x5b, 0x2b, 0x03, 0xd9, 0xf2, 0xd3, 0x7b, 0x23, 0x03, 0x29, 0x41, 0x7b, 0x7b, 0x23, 0xeb, 0x02, 0x29, 0x41, 0x2b, 0x63, 0x6b, 0x6b, 0x41, 0x4b, 0x03, 0x09, 0xf1, 0x41, 0x39, 0x39, 0x49, 0x49, 0x01, 0x01, 0x41, 0x81, 0xab, 0x93, 0x2b, 0xd3, 0x69, 0x03, 0x09, 0xf1, 0x41, 0x39, 0x99, 0xab, 0x1b, 0x1b, 0x2b, 0x9b, 0x9b, 0x3b, 0x49, 0x49, 0x01]);
	expect(newt.toString('hex')).toEqual(result.toString('hex'));
});

test('newt decode', function () {
	const buffer = Buffer.from([0x00, 0x14, 0x00, 0x00, 0x00, 0x01, 0x3f, 0xcc, 0xee, 0xed, 0x9e, 0x01, 0xdf, 0xed, 0xad, 0xce, 0x0d, 0x78, 0xe7, 0xea, 0xc6, 0xc6, 0xca, 0xe6, 0xe6]);
	const noun = newtDecode(buffer);
	console.log(noun.toString());
	expect(noun.toString()).toEqual('[%avow 0 %noun %success]')
});
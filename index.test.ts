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
	// console.log(newt.toString('hex').match(/../g)?.join(' '));
});

test('newt decode', function () {
	const buffer = Buffer.from([0x00, 0x14, 0x00, 0x00, 0x00, 0x01, 0x3f, 0xcc, 0xee, 0xed, 0x9e, 0x01, 0xdf, 0xed, 0xad, 0xce, 0x0d, 0x78, 0xe7, 0xea, 0xc6, 0xc6, 0xca, 0xe6, 0xe6]);
	const noun = newtDecode(buffer);
	// console.log(noun.toString());
});
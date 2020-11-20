import {Deck, register} from '../src/decks';
import chalk from 'chalk';
import puppeteer from 'puppeteer';
import {Page} from 'puppeteer';
import fs from 'fs';

const renderDeck = async (deck: Deck, page: Page) =>
{
	console.log(chalk.magentaBright(`Rendering Deck "${deck.name}"`));

	let count = 0;

	deck.cards.map((card) =>
	{
		if (!card.amount || isNaN(card.amount))
		{
			count++;
			return;
		}
		count += card.amount;
	});

	await page.setViewport({
		width: deck.width * 10,
		height: deck.height * 7,
	});

	await fs.promises.mkdir(`out/${deck.name}/`, {recursive: true});

	for (let i = 1; i <= Math.ceil(count / 69); i++)
	{
		console.log(chalk.redBright(`Rendering Sheet "${i}"`));

		await page.goto(`http://localhost:3000/${deck.name}/sheet/${i}`, {waitUntil: 'networkidle2'});
		await page.screenshot({path: `out/${deck.name}/sheet_${count}.png`});
	}
	await renderBackside(deck, page);
};

const renderBackside = async (deck: Deck, page: Page) =>
{
	console.log(chalk.redBright(`Rendering Backside`));
	await page.setViewport({
		width: deck.width,
		height: deck.height,
	});
	await page.goto(`http://localhost:3000/${deck.name}/backside`, {waitUntil: 'networkidle2'});
	await page.screenshot({path: `out/${deck.name}/backsite.png`});
};

(async () =>
{

	console.log(chalk.green.bold(`Rendering All Decks`));

	// @ts-ignore
	const browser = await puppeteer.launch({defaultViewport: null});
	const page = await browser.newPage();

	await Promise.all(
		register.map(async (item) =>
		{
			// @ts-ignore
			await renderDeck(item, page);
		}),
	);

	await browser.close();

	console.log(chalk.green.bold(`Done`));

})();

// SILENT
export default null;
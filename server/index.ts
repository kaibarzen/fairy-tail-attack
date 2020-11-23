import {ActionCard, Card, CharacterCard, Deck, register, RoleCard} from '../src/decks';
import chalk from 'chalk';
import puppeteer from 'puppeteer';
import {Page} from 'puppeteer';
import fs from 'fs';

const renderDeck = async (deck: Deck, card: Card, page: Page, puppeteer: any) =>
{
	console.log(chalk.magentaBright(`Rendering Deck "${deck.name}" - ${card.name}`));

	let count = 0;

	card.props.map((prop) =>
	{
		if (!prop.amount)
		{
			count++;
			return;
		}
		count += prop.amount;
	});

	await page.setViewport({
		width: deck.width * deck.x,
		height: deck.height * deck.y,
	});
	await fs.promises.mkdir(`out/${deck.name}/${card.name}/`, {recursive: true});

	console.log(chalk.magentaBright(`Sheets to render: ${Math.ceil(count / (deck.x * deck.y - 1))}`));

	for (let i = 1; i <= Math.ceil(count / (deck.x * deck.y - 1)); i++)
	{
		console.log(chalk.redBright(`Rendering Sheet ${i}`));
		await page.goto(`http://localhost:3000/${deck.name}/${card.name}/sheet/${i}`, {waitUntil: 'networkidle2'});
		await page.screenshot({path: `out/${deck.name}/${card.name}/sheet_${i}.png`, fullPage: true});

	}
	await renderBackside(deck, card, page);
};

const renderBackside = async (deck: Deck, card: Card, page: Page) =>
{
	console.log(chalk.redBright(`Rendering Backside`));
	await page.setViewport({
		width: deck.width,
		height: deck.height,
	});
	await page.goto(`http://localhost:3000/${deck.name}/${card.name}/backside`, {waitUntil: 'networkidle2'});
	await page.screenshot({path: `out/${deck.name}/${card.name}/backsite.png`});
};

(async () =>
{

	console.log(chalk.green.bold(`Rendering All Decks`));

	// @ts-ignore
	const browser = await puppeteer.launch({defaultViewport: null});
	const page = await browser.newPage();

	for (const deck of register)
	{
		for (const card of deck.cards)
		{
			await renderDeck(deck, card, page, puppeteer);
		}
	}

	await browser.close();

	console.log(chalk.green.bold(`Done`));

})();

// SILENT
export default null;
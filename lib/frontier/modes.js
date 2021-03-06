/**
 * @desc Sentinel representing the page only crawl mode
 * @type {symbol}
 */
const cmodePO = Symbol('page-only')

/**
 * @desc Sentinel representing the page same domain crawl mode
 * @type {symbol}
 */
const cmodePSD = Symbol('page-same-domain')

/**
 * @desc Sentinel representing the page all links crawl mode
 * @type {symbol}
 */
const cmodePAL = Symbol('page-all-links')

/**
 * @desc Sentinel representing the site crawl mode
 * @type {symbol}
 */
const cmodSite = Symbol('site-crawl')

/**
 * @desc Sentinel representing the page same subdomain - same domain crawl mode
 * @type {symbol}
 */
const cmodePSSD = Symbol('page-same-subdomain')

/**
 * @desc Sentinel representing the page same path crawl mode
 * @type {symbol}
 */
const cmodePSP = Symbol('page-same-path')

/**
 * @desc Crawl modes as symbols
 * @type {{cmodePO: symbol, cmodePSD: Symbol, cmodePAL: symbol, cmodSite: symbol}}
 */
module.exports = {
  cmodePO,
  cmodePSD,
  cmodePAL,
  cmodSite,
  cmodePSSD,
  cmodePSP
}
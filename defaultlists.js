var Immutable = require('immutable');

// Everything in the lists should be lowercase. Potential matches will also 
// be converted to lowercase.

var lists = {
  // falsePositivesList should contain only the singular forms of the words, 
  // words will be singularized before being checked against this list.
  falsePositives: [
    'rt',
    'http',
    'haha',
    'adv',
    'san',
    'tri',
    'asa',
    'att',
    'io',
    'imo',
    'pl',
    'dr',
    'ala',
    'ama'
  ],
  extendedBlacklist: [
    'negro',
    'negroes',
    'chink',
    'chinks',
    'gook',
    'gooks',
    'nigger',
    'niggers',
    'nigga',
    'niggas',
    'spic',
    'spics',
    'rape',
    'rapes',
    'rapist',
    'rapists',
    'bombing',
    'bombings',
    'shootings',
    'shooting',
    'miscarriage',
    'coon',
    'transgender', // OK normally, not OK as a noun.
    'swastika',
    'nazi',
    'nazis',
    'nazidom',
    'holocaust',
    'islamist',
    'jihadist',
    'klan',
    'blackface',
    'abuser',
    'n-word',
    'darky',
    'darkies'
  ],
  tragedyModeBlacklist: [
    'gaza',
    'israel',
    'palestine',
    'invasion',
    'horror',
    'genocide',
    'explosion',
    'assault',
    'hamas',
    'bomb',
    'plane',
    'death',
    'missile',
    'crash',
    'suicide',
    'airstrike',
    'brigadier',
    'idf',
    'isis',
    'mourner',
    'mourners',
    'iraq',
    'accident',
    'ebola',
    'depression',
    'asphyxiation',
    'ferguson',
    'beheading',
    'foley',
    'gun',
    'rip',
    'chokehold',
    'coroner',
    'eric',
    'garner',
    'torture',
    'torturer',
    'ukraine',
    'donetsk',
    'jihad',
    'grieving',
    'walter',
    'scott',
    'cop',
    'police',
    'officer',
    'nepal',
    'earthquake',
    'katmandu',
    'Durbar',
    'wreckage',
    'carnage',
    'riot',
    'rioting',
    'baltimore',
    'freddie',
    'gray',
    'derailment',
    'amtrak',
    'train',
    'philadelphia'
  ],
  whitelist: [
    'javascript'
  ]
};

// TODO: Differentiate between words not cool to say vs. words not cool to
// respond to.

module.exports = Immutable.Map(lists);

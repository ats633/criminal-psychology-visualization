// Create an object to hold stats for each serial killer
const serialKillerStats = {
    "Ted Bundy": {
        victims: "30+ confirmed",
        country: "United States",
        activeYears: "1974–1978",
        weapon: "Blunt objects, strangulation",
        murderLocations: "Washington, Utah, Colorado, Florida, Oregon, Idaho",
        placeOfBirth: "Burlington, Vermont, USA",
        placeOfDeath: "Florida State Prison, Florida, USA (executed)",
        funFacts: [
            "Ted Bundy was known for his charm and good looks.",
            "He often pretended to be injured to lure his victims.",
            "Bundy escaped from prison twice before being recaptured.",
            "His final murder spree occurred in Florida, where he killed two women in a sorority house.",
            "Bundy was executed in the electric chair in 1989."
        ],
        movies: ["The Deliberate Stranger (1986)", "Extremely Wicked, Shockingly Evil and Vile (2019)"],
        books: ["The Stranger Beside Me by Ann Rule", "Ted Bundy: Conversations with a Killer by Stephen Michaud"]
    },
    "Jeffrey Dahmer": {
        victims: "17 confirmed",
        country: "United States",
        activeYears: "1978–1991",
        weapon: "Strangulation, dismemberment",
        murderLocations: "Wisconsin, Ohio",
        placeOfBirth: "Milwaukee, Wisconsin, USA",
        placeOfDeath: "Portage, Wisconsin, USA (murdered in prison)",
        funFacts: [
            "Dahmer was known as the 'Milwaukee Cannibal' for his gruesome crimes.",
            "He would preserve body parts and keep them as trophies.",
            "Dahmer’s victims were mostly young men, many of whom he lured back to his apartment.",
            "He was arrested in 1991 when a would-be victim escaped and alerted the police.",
            "Dahmer was beaten to death by a fellow inmate in 1994."
        ],
        movies: ["Dahmer (2002)", "My Friend Dahmer (2017)"],
        books: ["The Jeffrey Dahmer Story by Don Davis", "A Father's Story by Lionel Dahmer"]
    },
    "John Wayne Gacy": {
        victims: "33 confirmed",
        country: "United States",
        activeYears: "1972–1978",
        weapon: "Strangulation, suffocation",
        murderLocations: "Illinois",
        placeOfBirth: "Chicago, Illinois, USA",
        placeOfDeath: "Crest Hill, Illinois, USA (executed)",
        funFacts: [
            "Gacy was known as the 'Killer Clown' because he performed as a clown at children's parties.",
            "He lured young boys to his home, where he killed and buried most of them in his crawl space.",
            "He was convicted in 1980 and sentenced to death.",
            "He spent 14 years on death row before being executed by lethal injection in 1994.",
            "He was one of the most notorious serial killers in American history."
        ],
        movies: ["Gacy (2003)"],
        books: ["Killer Clown by Terry Sullivan", "Buried Dreams by Tim Cahill"]
    },
    "Jack the Ripper": {
        victims: "5 confirmed, possibly more",
        country: "United Kingdom",
        activeYears: "1888",
        weapon: "Knife",
        murderLocations: "Whitechapel, London",
        placeOfBirth: "Unknown",
        placeOfDeath: "Unknown",
        funFacts: [
            "Jack the Ripper's identity remains a mystery to this day.",
            "He targeted prostitutes in the Whitechapel district of London.",
            "The nature of the murders suggested medical knowledge due to the precise mutilations.",
            "Many theories about his identity exist, but none have been proven.",
            "Jack the Ripper is one of the most famous unidentified serial killers."
        ],
        movies: ["From Hell (2001)", "Jack the Ripper (1988)"],
        books: ["Jack the Ripper: The Definitive History by Paul Begg", "The Complete Jack the Ripper by Donald Rumbelow"]
    },
    "Aileen Wuornos": {
        victims: "7 confirmed",
        country: "United States",
        activeYears: "1989–1990",
        weapon: "Shooting",
        murderLocations: "Florida",
        placeOfBirth: "Rochester, Michigan, USA",
        placeOfDeath: "Florida State Prison, Florida, USA (executed)",
        funFacts: [
            "Wuornos was a rare female serial killer who targeted men.",
            "She claimed her killings were in self-defense against men who had assaulted her.",
            "Her life story was portrayed in the movie 'Monster' (2003).",
            "She was sentenced to death and executed by lethal injection in 2002.",
            "She became a symbol of the complexity of female serial killers."
        ],
        movies: ["Monster (2003)"],
        books: ["Dear Dawn: Aileen Wuornos in Her Own Words by Lisa Kester"]
    },
    "Pedro Alonso López": {
        victims: "110+ confirmed, suspected of up to 300",
        country: "Colombia, Ecuador, Peru",
        activeYears: "1969–1980",
        weapon: "Strangulation",
        murderLocations: "Colombia, Ecuador, Peru",
        placeOfBirth: "Santa Isabel, Colombia",
        placeOfDeath: "Unknown",
        funFacts: [
            "López is known as the 'Monster of the Andes.'",
            "He targeted young girls across several South American countries.",
            "He claimed to have killed more than 300 girls.",
            "López was arrested in 1980 but later released, and his whereabouts are currently unknown.",
            "His true number of victims may never be known due to inconsistent record-keeping."
        ],
        movies: [],
        books: []
    },
    "Andrei Chikatilo": {
        victims: "52 confirmed",
        country: "Soviet Union",
        activeYears: "1978–1990",
        weapon: "Stabbing, strangulation",
        murderLocations: "Rostov Oblast, Russia",
        placeOfBirth: "Yabluchne, Ukraine",
        placeOfDeath: "Moscow, Russia (executed)",
        funFacts: [
            "Chikatilo was known as the 'Butcher of Rostov.'",
            "He targeted women and children, often mutilating their bodies.",
            "Chikatilo evaded capture for over a decade due to poor Soviet police practices.",
            "He was finally caught in 1990 and executed by gunshot in 1994.",
            "Chikatilo is one of the most notorious serial killers in Russian history."
        ],
        movies: ["Citizen X (1995)"],
        books: ["The Red Ripper by Peter Conradi", "Hunting the Devil by Richard Lourie"]
    },
    "Richard Ramirez": {
        victims: "13 confirmed",
        country: "United States",
        activeYears: "1984–1985",
        weapon: "Shooting, stabbing, bludgeoning",
        murderLocations: "California",
        placeOfBirth: "El Paso, Texas, USA",
        placeOfDeath: "Marin General Hospital, California, USA",
        funFacts: [
            "Ramirez was known as the 'Night Stalker.'",
            "He broke into homes and murdered people in their beds.",
            "Ramirez claimed to be a Satanist and left symbols at crime scenes.",
            "He was caught in 1985 after being recognized by a mob of citizens in Los Angeles.",
            "He died of complications from lymphoma in 2013 while on death row."
        ],
        movies: ["Nightstalker (2002)"],
        books: ["The Night Stalker by Philip Carlo"]
    },
    "Harold Shipman": {
        victims: "250+ confirmed",
        country: "United Kingdom",
        activeYears: "1975–1998",
        weapon: "Lethal injection (medical)",
        murderLocations: "Hyde, England",
        placeOfBirth: "Nottingham, England",
        placeOfDeath: "Wakefield Prison, England (suicide)",
        funFacts: [
            "Shipman was a general practitioner who killed his patients, mainly elderly women.",
            "He is one of the most prolific serial killers in history.",
            "Shipman was caught after forging the will of a patient to inherit her estate.",
            "He committed suicide in 2004, the day before his 58th birthday.",
            "A public inquiry found that Shipman had murdered at least 250 patients."
        ],
        movies: ["Doctor Death (2010)"],
        books: ["The Good Doctor by Wensley Clarkson", "Prescription for Murder by Brian Whittle"]
    },
    "Ed Gein": {
        victims: "2 confirmed, suspected of more",
        country: "United States",
        activeYears: "1954–1957",
        weapon: "Shooting",
        murderLocations: "Wisconsin",
        placeOfBirth: "La Crosse, Wisconsin, USA",
        placeOfDeath: "Mendota Mental Health Institute, Wisconsin, USA",
        funFacts: [
            "Gein inspired characters in movies like 'Psycho,' 'The Texas Chainsaw Massacre,' and 'Silence of the Lambs.'",
            "He exhumed corpses from local graveyards to make macabre trophies.",
            "Gein's house of horrors was discovered in 1957.",
            "He was declared legally insane and spent the rest of his life in a mental institution.",
            "His crimes shocked the small town of Plainfield, Wisconsin."
        ],
        movies: ["Deranged (1974)", "Ed Gein (2000)"],
        books: ["Deviant by Harold Schechter", "Ed Gein: Psycho by Paul Anthony Woods"]
    },
    "Dennis Rader": {
        victims: "10 confirmed",
        country: "United States",
        activeYears: "1974–1991",
        weapon: "Strangulation",
        murderLocations: "Kansas",
        placeOfBirth: "Pittsburg, Kansas, USA",
        placeOfDeath: "Currently alive (serving life sentences)",
        funFacts: [
            "Rader was known as the 'BTK Killer' (Bind, Torture, Kill).",
            "He taunted police with letters describing his crimes.",
            "Rader led a double life as a church leader and family man.",
            "He was caught in 2005 after sending a floppy disk to the police, which they traced back to him.",
            "Rader is serving 10 consecutive life sentences in prison."
        ],
        movies: ["BTK (2008)"],
        books: ["Confession of a Serial Killer by Katherine Ramsland", "Bind, Torture, Kill by Roy Wenzl"]
    },
    "Gary Ridgway": {
        victims: "49 confirmed, suspected of more",
        country: "United States",
        activeYears: "1982–2001",
        weapon: "Strangulation",
        murderLocations: "Washington",
        placeOfBirth: "Salt Lake City, Utah, USA",
        placeOfDeath: "Currently alive (serving life sentences)",
        funFacts: [
            "Ridgway was known as the 'Green River Killer.'",
            "He targeted sex workers and runaways in the Seattle area.",
            "Ridgway evaded capture for almost two decades.",
            "He confessed to killing 49 women but may have murdered more.",
            "Ridgway was sentenced to life in prison without the possibility of parole in 2003."
        ],
        movies: ["The Riverman (2004)"],
        books: ["Green River, Running Red by Ann Rule"]
    },
    "David Berkowitz": {
        victims: "6 confirmed",
        country: "United States",
        activeYears: "1976–1977",
        weapon: "Shooting",
        murderLocations: "New York",
        placeOfBirth: "Brooklyn, New York, USA",
        placeOfDeath: "Currently alive (serving life sentences)",
        funFacts: [
            "Berkowitz was known as the 'Son of Sam.'",
            "He terrorized New York City during the summer of 1977.",
            "Berkowitz claimed that his neighbor's dog commanded him to kill.",
            "He was captured in 1977 after a massive manhunt.",
            "Berkowitz has since become a born-again Christian in prison."
        ],
        movies: ["Summer of Sam (1999)"],
        books: ["Son of Sam by Lawrence Klausner"]
    },
    "Albert Fish": {
        victims: "3 confirmed, suspected of more",
        country: "United States",
        activeYears: "1924–1932",
        weapon: "Strangulation, stabbing",
        murderLocations: "New York",
        placeOfBirth: "Washington, D.C., USA",
        placeOfDeath: "Sing Sing Prison, New York, USA (executed)",
        funFacts: [
            "Fish was known as the 'Brooklyn Vampire' and 'The Boogey Man.'",
            "He was a cannibal and sadomasochist who targeted children.",
            "Fish sent a letter to the family of one of his victims, describing the murder.",
            "He was arrested in 1934 and executed in the electric chair in 1936.",
            "Fish claimed to have killed and eaten several other children, though these claims were never confirmed."
        ],
        movies: ["The Gray Man (2007)"],
        books: ["Deranged by Harold Schechter"]
    },
    "H.H. Holmes": {
        victims: "27 confirmed, suspected of more",
        country: "United States",
        activeYears: "1891–1894",
        weapon: "Various methods",
        murderLocations: "Chicago, Illinois",
        placeOfBirth: "Gilmanton, New Hampshire, USA",
        placeOfDeath: "Philadelphia, Pennsylvania, USA (executed)",
        funFacts: [
            "Holmes was a con artist and the architect of the 'Murder Castle,' a hotel designed for killing.",
            "He used his hotel to lure victims during the 1893 World's Fair in Chicago.",
            "Holmes was caught after a botched insurance fraud scheme.",
            "He confessed to 27 murders, though the real number may be higher.",
            "Holmes was executed by hanging in 1896."
        ],
        movies: ["H.H. Holmes: America's First Serial Killer (2004)"],
        books: ["The Devil in the White City by Erik Larson"]
    },
    "Edmund Kemper": {
        victims: "10 confirmed",
        country: "United States",
        activeYears: "1964–1973",
        weapon: "Strangulation, shooting",
        murderLocations: "California",
        placeOfBirth: "Burbank, California, USA",
        placeOfDeath: "Currently in prison",
        funFacts: [
            "Kemper was known as the 'Co-Ed Killer.'",
            "He killed his grandparents when he was 15 years old.",
            "He murdered and dismembered female college students and his mother.",
            "Kemper turned himself in after killing his mother and a friend.",
            "He is known for his high IQ and has participated in many interviews."
        ],
        movies: ["Kemper: The Co-Ed Killer (2008)", "Mindhunter (2017–2019)"],
        books: ["The Co-Ed Killer by Margaret Cheney", "Kemper on Kemper by John E. Douglas"]
    },
    "Israel Keyes": {
        victims: "3 confirmed, suspected of more",
        country: "United States",
        activeYears: "2001–2012",
        weapon: "Shooting, strangulation",
        murderLocations: "Various locations across the US",
        placeOfBirth: "Richmond, Utah, USA",
        placeOfDeath: "Anchorage, Alaska, USA (suicide)",
        funFacts: [
            "Keyes was known for his meticulous planning and creating 'kill kits.'",
            "He did not have a specific victim profile, making him harder to catch.",
            "He traveled across the country to commit murders, making him a unique case.",
            "Keyes committed suicide in 2012 while in custody.",
            "He is believed to have killed up to 11 people."
        ],
        movies: ["Method of a Serial Killer (2018)"],
        books: ["American Predator by Maureen Callahan"]
    },
    "John George Haigh": {
        victims: "6 confirmed",
        country: "United Kingdom",
        activeYears: "1944–1949",
        weapon: "Shooting, bludgeoning, acid baths",
        murderLocations: "London, Sussex, UK",
        placeOfBirth: "Stamford, Lincolnshire, England",
        placeOfDeath: "Wandsworth Prison, London, England (executed)",
        funFacts: [
            "Haigh was known as the 'Acid Bath Murderer.'",
            "He dissolved his victims' bodies in sulfuric acid to dispose of evidence.",
            "Haigh claimed he believed that without a body, there could be no crime.",
            "He was caught after failing to dispose of all evidence properly.",
            "Haigh was executed by hanging in 1949."
        ],
        movies: ["A is for Acid (2002)"],
        books: ["Acid Bath Murderer by Gordon Lowe", "The Acid Bath Murders by Donald Rumbelow"]
    },
    "Peter Sutcliffe": {
        victims: "13 confirmed",
        country: "United Kingdom",
        activeYears: "1975–1980",
        weapon: "Hammer, knives",
        murderLocations: "Yorkshire, UK",
        placeOfBirth: "Bingley, West Yorkshire, England",
        placeOfDeath: "Durham Prison, England (died of COVID-19 complications)",
        funFacts: [
            "Sutcliffe was known as the 'Yorkshire Ripper.'",
            "He targeted sex workers and women walking alone at night.",
            "He eluded capture for several years despite extensive investigations.",
            "Sutcliffe was convicted in 1981 and received 20 life sentences.",
            "He died in prison in 2020."
        ],
        movies: ["This Is Personal: The Hunt for the Yorkshire Ripper (2000)"],
        books: ["Wicked Beyond Belief by Michael Bilton", "Somebody’s Husband, Somebody’s Son by Gordon Burn"]
    },
    "Earle Nelson": {
        victims: "22 confirmed, suspected of more",
        country: "United States",
        activeYears: "1926–1927",
        weapon: "Strangulation",
        murderLocations: "Various locations across the US and Canada",
        placeOfBirth: "San Francisco, California, USA",
        placeOfDeath: "Manitoba, Canada (executed)",
        funFacts: [
            "Nelson was known as the 'Gorilla Killer' for his brute strength.",
            "He targeted landladies in boarding houses across North America.",
            "Nelson's killings spanned multiple states and provinces, making him hard to track.",
            "He was finally caught in Canada and extradited to the US for trial.",
            "Nelson was executed by hanging in 1928."
        ],
        movies: [],
        books: ["The Gorilla Man Strangler by Alan Whiticker"]
 function showSelectedKiller() {
    // Get the selected killer's name
    var selectedKiller = document.getElementById("serialKillersDropdown").value;
    
    // If a killer is selected, show their stats
    if (selectedKiller && serialKillerStats[selectedKiller]) {
        var stats = serialKillerStats[selectedKiller];
        var funFactsList = stats.funFacts.map(fact => `<li>${fact}</li>`).join('');
        document.getElementById("selectedKiller").innerHTML = `
            <strong>${selectedKiller}</strong><br>
            <strong>Victims:</strong> ${stats.victims}<br>
            <strong>Country:</strong> ${stats.country}<br>
            <strong>Active Years:</strong> ${stats.activeYears}<br>
            <strong>Weapon of Choice:</strong> ${stats.weapon}<br>
            <strong>Murder Locations:</strong> ${stats.murderLocations}<br>
            <strong>Fun Facts:</strong>
            <ul>${funFactsList}</ul>
        `;
    } else {
        // Clear the stats if no selection is made
        document.getElementById("selectedKiller").innerHTML = "";
    }
}

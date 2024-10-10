const serialKillerStats = {
    "Ted Bundy": {
        victims: "30+ confirmed",
        country: "United States",
        activeYears: "1974–1978",
        weapon: "Strangulation, blunt force",
        murderLocations: "Washington, Oregon, Utah, Colorado, Florida",
        funFacts: [
            "Ted Bundy often used his charm and good looks to lure victims.",
            "He was a law student at the University of Utah.",
            "Bundy escaped from custody twice before his final capture.",
            "He confessed to killing 30 women, though the actual number is believed to be higher.",
            "Bundy was executed in Florida's electric chair in 1989."
        ]
    },
    "Jeffrey Dahmer": {
        victims: "17 confirmed",
        country: "United States",
        activeYears: "1978–1991",
        weapon: "Drugging, strangulation",
        murderLocations: "Wisconsin, Ohio",
        funFacts: [
            "Dahmer's apartment was later referred to as a 'house of horrors.'",
            "He was diagnosed with borderline personality disorder.",
            "Dahmer attempted to create 'zombie' followers by injecting acid into victims' brains.",
            "He was sentenced to 15 consecutive life terms in prison.",
            "Dahmer was murdered by a fellow inmate in 1994."
        ]
    },
    "John Wayne Gacy": {
        victims: "33 confirmed",
        country: "United States",
        activeYears: "1972–1978",
        weapon: "Suffocation, strangulation",
        murderLocations: "Illinois",
        funFacts: [
            "Gacy performed as a clown at children's parties, earning him the name 'Killer Clown.'",
            "He was active in local politics and even had a photo taken with the President.",
            "Gacy buried many of his victims in the crawl space of his home.",
            "He was arrested in 1978 after a teenage boy went missing.",
            "Gacy was executed by lethal injection in 1994."
        ]
    },
    "Jack the Ripper": {
        victims: "5 confirmed",
        country: "United Kingdom",
        activeYears: "1888",
        weapon: "Knife",
        murderLocations: "Whitechapel, London",
        funFacts: [
            "Jack the Ripper’s identity remains a mystery to this day.",
            "The Ripper taunted police with letters, signed 'Jack the Ripper.'",
            "Victims were primarily women involved in sex work.",
            "The case remains one of the most infamous unsolved crimes in history.",
            "Several theories exist about the Ripper's identity, including suspects from various backgrounds."
        ]
    },
    "Aileen Wuornos": {
        victims: "7 confirmed",
        country: "United States",
        activeYears: "1989–1990",
        weapon: "Gun",
        murderLocations: "Florida",
        funFacts: [
            "Aileen Wuornos' life story was adapted into the movie 'Monster,' for which Charlize Theron won an Oscar.",
            "She claimed her victims had attempted to sexually assault her.",
            "Wuornos was executed in Florida in 2002.",
            "She was diagnosed with borderline personality disorder and antisocial personality disorder.",
            "Her life was marked by a history of abuse and hardship."
        ]
    },
    "Pedro Alonso López": {
        victims: "300+ suspected",
        country: "Colombia, Peru, Ecuador",
        activeYears: "1969–1980",
        weapon: "Strangulation",
        murderLocations: "South America",
        funFacts: [
            "Pedro López, known as 'The Monster of the Andes,' targeted young girls.",
            "He was arrested in 1980 and confessed to the murders.",
            "López was declared insane and sent to a psychiatric hospital.",
            "He was released in 1998 but later re-arrested.",
            "López claims he was inspired to kill after being abused as a child."
        ]
    },
    "Andrei Chikatilo": {
        victims: "52 confirmed",
        country: "Soviet Union (Russia)",
        activeYears: "1978–1990",
        weapon: "Stabbing, strangulation",
        murderLocations: "Rostov region, Soviet Union",
        funFacts: [
            "Chikatilo was a former teacher who preyed on women and children.",
            "He was nicknamed 'The Butcher of Rostov' and 'The Red Ripper.'",
            "Chikatilo's trial was one of the longest in Russian history.",
            "He often lured victims to remote areas before killing them.",
            "Chikatilo was executed by a gunshot in 1994."
        ]
    },
    "Richard Ramirez": {
        victims: "13 confirmed",
        country: "United States",
        activeYears: "1984–1985",
        weapon: "Guns, knives, hammers",
        murderLocations: "California (Los Angeles, San Francisco)",
        funFacts: [
            "Richard Ramirez was known as the 'Night Stalker' for his nighttime home invasions.",
            "He was influenced by his cousin, who was a soldier in Vietnam.",
            "Ramirez was convicted of 13 murders, 5 attempted murders, and 11 sexual assaults.",
            "He died of cancer while on death row in 2013.",
            "Ramirez often left satanic symbols at crime scenes."
        ]
    },
    "Harold Shipman": {
        victims: "250+ suspected",
        country: "United Kingdom",
        activeYears: "1975–1998",
        weapon: "Lethal injection",
        murderLocations: "United Kingdom",
        funFacts: [
            "Harold Shipman, a doctor, is one of the most prolific serial killers in modern history.",
            "He was convicted in 2000 of murdering 15 patients.",
            "Shipman often forged patients' wills to benefit himself.",
            "He committed suicide in prison in 2004.",
            "Many of his victims were elderly women."
        ]
    },
    "Ed Gein": {
        victims: "2 confirmed, many body parts recovered",
        country: "United States",
        activeYears: "1954–1957",
        weapon: "Shooting",
        murderLocations: "Wisconsin",
        funFacts: [
            "Ed Gein inspired many horror films, including 'Psycho' and 'The Texas Chainsaw Massacre.'",
            "He was a grave robber who exhumed bodies from local cemeteries.",
            "Gein was found not guilty by reason of insanity.",
            "He was committed to a mental institution until his death in 1984.",
            "His home was filled with gruesome trophies made from human remains."
        ]
    },
    "Dennis Rader": {
        victims: "10 confirmed",
        country: "United States",
        activeYears: "1974–1991",
        weapon: "Strangulation",
        murderLocations: "Kansas",
        funFacts: [
            "Dennis Rader, also known as BTK ('Bind, Torture, Kill'), taunted the police with letters.",
            "He held a regular job as a compliance officer.",
            "Rader was arrested in 2005 after his DNA was matched to a crime scene.",
            "He committed his first murder at the age of 29.",
            "Rader was sentenced to 10 consecutive life sentences without the possibility of parole."
        ]
    },
    "Gary Ridgway": {
        victims: "49 confirmed, 70+ suspected",
        country: "United States",
        activeYears: "1982–2001",
        weapon: "Strangulation",
        murderLocations: "Washington State",
        funFacts: [
            "Gary Ridgway, known as the Green River Killer, targeted sex workers.",
            "He initially evaded capture for nearly two decades.",
            "Ridgway confessed to murdering 71 women, but 49 were confirmed.",
            "He cooperated with law enforcement to help locate the remains of victims.",
            "Ridgway was sentenced to 49 life terms in 2003."
        ]
    },
    "David Berkowitz": {
        victims: "6 confirmed",
        country: "United States",
        activeYears: "1976–1977",
        weapon: "Handgun",
        murderLocations: "New York City",
        funFacts: [
            "David Berkowitz, known as the 'Son of Sam,' claimed a demon-possessed dog commanded him to kill.",
            "He was a former army veteran and had a troubled childhood.",
            "Berkowitz was captured after a parking ticket led police to his car.",
            "He was sentenced to 25 years to life in prison.",
            "Berkowitz later became a born-again Christian while in prison."
        ]
    },
    "Albert Fish": {
        victims: "3 confirmed, suspected of many more",
        country: "United States",
        activeYears: "1924–1932",
        weapon: "Various (knives, saws)",
        murderLocations: "New York, other U.S. cities",
        funFacts: [
            "Albert Fish was a sadomasochist who sent letters to his victims’ families.",
            "He claimed to have had a craving for human flesh since childhood.",
            "Fish was arrested in 1934 after the murder of a young girl named Grace Budd.",
            "He was executed in the electric chair in 1936.",
            "Fish's horrific acts inspired several horror films and literature."
        ]
    },
    "H.H. Holmes": {
        victims: "9 confirmed, many more suspected",
        country: "United States",
        activeYears: "1890–1894",
        weapon: "Poison, suffocation, stabbing",
        murderLocations: "Chicago (Illinois)",
        funFacts: [
            "H.H. Holmes built a 'Murder Castle' during the 1893 World’s Fair in Chicago.",
            "The hotel had secret rooms and trapdoors designed for killing.",
            "He was arrested in 1894 on charges of insurance fraud.",
            "Holmes confessed to 27 murders, although the exact number remains unknown.",
            "He was executed by hanging in 1896."
        ]
    }
};

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
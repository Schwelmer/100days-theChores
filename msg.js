window.onload = () => genMsg();

genMsg = () => {
    let finalMsg;
    const pepPool = {    
        _first: ['Champ,','Fact:','Everybody says','Dang ...','Checkit:','Just saying ...','Superstar,','Tiger,','Self,','Know this:','News alert:','Girl,','Ace,','Excuse me but','Experts agree:','In my opinion,','Hear ye, hear ye:','Okay, listen up:'],
        _second: ['the mere idea of you','yoursoul','your hair today','everything you do','your personal style','every thought you have','that sparkle in your eye','your presence here','what you got going on','the essential you','your life\'s journey','that saucy personality','your DNA','that brain of yours','your choice of attire','the way you roll','whatever your secret is','all of y\'all'],
        _third: ['has serious game,','rains magic,','deserves the Nobel Prize,','raises the roof,','breeds miracles,','is paying off big time,','shows mad skills,','just shimmers,','is a national neasure,','gets the party hopping,','is the next big thing,','roars like a lion,','is a rainbow factory,','is made of diamonds,','makes birds sing,','should be taught in school,','makes my world go\'round,','is 100% legit,'],
        _fourth: ['24/7.','can I get an amen?','and that\'s a fact.','so treat yourself.','you feel me?','that\'s just science.','would I lie?','forreals.','micdrop.','you hidden gem.','snuggle bear.','period.','can I get an amen?','now let\'s dance.','highfive.','sayitagain!','according to CNN.','so get used to it.'],
        get first() { return this.fetcher('first'); },
        get second() { return this.fetcher('second'); },
        get third() { return this.fetcher('third'); },
        get fourth() { return this.fetcher('fourth'); },
        fetcher(pool) {
            const randPool = Math.floor(Math.random() * this['_'+pool].length);
            return this['_'+pool][randPool];
        },
        buildPep() {
            const pepMsg = [];
            for (const pool of ['first','second','third','fourth']) pepMsg.push(this.fetcher(pool));
            return pepMsg.join(' ');
        }
    }
    document.getElementById('peptalk').innerHTML = pepPool.buildPep();
};

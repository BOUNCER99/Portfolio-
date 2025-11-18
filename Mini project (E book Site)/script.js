const books = [
    {
        id: 1,
        title: "The Great Adventure",
        author: "John Smith",
        genre: "fiction",
        cover: "🌟",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: The Beginning</h3>
                <p>It was a bright cold day in April, and the clocks were striking thirteen. Our hero, James Wellington, stood at the edge of the cliff, looking out at the vast ocean before him. The wind whipped through his hair as he contemplated the journey ahead.</p>
                <p>For months, he had been planning this expedition. The ancient map he had discovered in his grandfather's attic promised treasures beyond imagination, hidden on a mysterious island that appeared on no modern charts.</p>
                <p>As he adjusted his backpack and checked his compass one final time, James couldn't shake the feeling that his life was about to change forever. Little did he know that this adventure would test not only his courage but also his understanding of what it means to be truly alive.</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: The Journey Begins</h3>
                <p>The small boat rocked gently as James pushed off from the shore. He had purchased the vessel just two days prior from an old fisherman who spoke in riddles and seemed to know more about James's destination than he let on.</p>
                <p>"Be careful of the waters near the third moon," the old man had warned. "They say the sea remembers everything, and some memories are better left undisturbed."</p>
                <p>Now, as James navigated through the calm morning waters, those words echoed in his mind. The sun was rising behind him, casting long shadows across the waves, and ahead lay nothing but endless blue horizon.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Mystery of the Lost Key",
        author: "Sarah Johnson",
        genre: "mystery",
        cover: "🔍",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: The Locked Room</h3>
                <p>Detective Maria Santos had seen many strange cases in her fifteen years on the force, but nothing quite like this. The room was locked from the inside, the key was missing, and the only witness was a cat that seemed to know more than it was letting on.</p>
                <p>The victim, Professor Harold Whitman, was found slumped over his desk in his private study. The door had been locked from the inside, the windows were sealed shut, and there was no other way in or out. Yet somehow, the murder weapon – an ornate letter opener – was nowhere to be found.</p>
                <p>"Impossible," muttered her partner, Detective Rodriguez. "How does someone commit murder in a locked room and then vanish into thin air?"</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: The First Clue</h3>
                <p>Maria examined the scene more carefully. The professor's desk was neat and organized, except for one thing – a single chess piece, a black knight, sat in the middle of the desk where it clearly didn't belong.</p>
                <p>She picked up the chess piece and noticed something odd. It was warm to the touch, as if it had been recently handled. More intriguing still, there was a small compartment in its base, and inside was a tiny rolled-up piece of paper.</p>
                <p>With trembling hands, she unrolled the paper. On it, written in the professor's distinctive handwriting, was a single word: "Remember."</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Hearts in Harmony",
        author: "Emily Rose",
        genre: "romance",
        cover: "💕",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: Unexpected Encounter</h3>
                <p>Sophia had always believed that love was like music – it couldn't be forced, it had to flow naturally. As she hurried down the rain-soaked streets of Seattle, her violin case clutched tightly to her chest, she never expected to literally run into her destiny.</p>
                <p>The collision sent her flying, her violin case skittering across the wet pavement. Strong arms caught her before she hit the ground, and she found herself staring into the most beautiful brown eyes she had ever seen.</p>
                <p>"I'm so sorry," said the stranger, his voice warm and concerned. "Are you hurt? Is your instrument okay?"</p>
                <p>Sophia's heart was racing, but not from the fall. There was something about this man – the way he immediately thought of her violin, the genuine worry in his expression – that made her forget about the rain, the cold, and everything else.</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: A Musical Connection</h3>
                <p>His name was David, and as it turned out, he was a pianist. They ended up in a small café nearby, drying off and sharing stories about their musical journeys. Sophia learned that David had recently moved to Seattle to teach at the local conservatory.</p>
                <p>"Would you like to play together sometime?" David asked as they prepared to part ways. "I have a feeling our musical styles might complement each other beautifully."</p>
                <p>Sophia smiled, feeling a warmth spread through her chest. "I'd love that," she replied, and meant it more than she had meant anything in a long time.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Galactic Odyssey",
        author: "Alex Morrison",
        genre: "sci-fi",
        cover: "🚀",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: First Contact</h3>
                <p>Captain Elena Vasquez never expected her routine patrol of the Outer Rim to change the course of human history. The distress signal came from a sector that was supposed to be empty – no planets, no stations, nothing but the cold vacuum of space.</p>
                <p>As the starship Endeavor approached the source of the signal, her sensors detected something impossible: a massive structure, clearly artificial, drifting silently through space. It was unlike anything in the Federation databases.</p>
                <p>"Captain," said her science officer, Lieutenant Commander Park, his voice tight with excitement. "I'm reading life signs. Whatever this thing is, it's not abandoned."</p>
                <p>Elena stared at the alien structure on the viewscreen. After decades of searching, humanity was no longer alone in the universe.</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: The Artifact</h3>
                <p>The away team materialized in what appeared to be a vast hangar bay. The architecture was breathtakingly beautiful – flowing curves and spiraling patterns that seemed to shift and change as they watched.</p>
                <p>"These readings are off the charts," whispered Dr. Chen, the team's xenobiologist. "The materials, the construction techniques – they're centuries ahead of anything we have."</p>
                <p>As they explored deeper into the alien vessel, Elena couldn't shake the feeling that they were being watched. The ship felt alive, aware of their presence. And somewhere in the distance, she could hear something that sounded almost like... singing.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "classic",
        cover: "📖",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: First Impressions</h3>
                <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.</p>
                <p>"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"</p>
                <p>Mr. Bennet replied that he had not.</p>
                <p>"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."</p>
                <p>Mr. Bennet made no answer.</p>
                <p>"Do you not want to know who has taken it?" cried his wife impatiently.</p>
                <p>"You want to tell me, and I have no objection to hearing it."</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: The Ball</h3>
                <p>The ladies of Longbourn soon waited on those of Netherfield. The visit was soon returned in due form. Miss Bennet's pleasing manners grew on the goodwill of Mrs. Hurst and Miss Bingley; and though the mother was found to be intolerable, and the younger sisters not worth speaking to, a wish of being better acquainted with them was expressed towards the two eldest.</p>
                <p>When the first ball at Netherfield was announced, Elizabeth found herself both excited and apprehensive. She had heard much about Mr. Darcy's proud demeanor, and she was curious to see if the rumors were true.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "The Enchanted Forest",
        author: "Luna Brightwood",
        genre: "fiction",
        cover: "🌲",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: Into the Woods</h3>
                <p>Maya had always been drawn to the forest at the edge of her village. The elders spoke of it in hushed whispers, warning children never to venture too deep. But Maya was no longer a child, and the mysteries of the Whispering Woods called to her like a siren's song.</p>
                <p>Armed with nothing but her grandmother's silver compass and a backpack filled with provisions, she stepped across the threshold where the familiar path ended and the unknown began.</p>
                <p>Almost immediately, she noticed that something was different about this place. The air shimmered with an otherworldly energy, and the trees seemed to lean in closer, as if listening to her every step.</p>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: The Guardian</h3>
                <p>Deeper in the forest, Maya encountered a creature unlike anything she had ever seen. It stood seven feet tall, with bark-like skin and eyes that glowed like emeralds in the filtered sunlight. Yet despite its intimidating appearance, she felt no fear.</p>
                <p>"You seek the Heart of the Forest," the creature spoke, its voice like wind through leaves. "Few humans have been deemed worthy of such a quest."</p>
                <p>Maya nodded, though she hadn't consciously known that was what she sought until the words were spoken. Something deep within her soul recognized the truth of the guardian's statement.</p>
            </div>
        `
    },
      {
        id: 7,
        title: "To Kill a Mocking bird",
        author: "Haper Lee",
        genre: "classic",
        cover: "📝",
        content: `
            <div class="chapter">
                <h3 class="chapter-title">Chapter 1: Scout Finch </h3>
                <p>The story is narrated by Scout Finch, a young girl living in the small town of Maycomb, 
                Alabama, during the 1930s. She introduces her family: her father Atticus Finch, a respected lawyer; 
                her older brother Jem; and their cook Calpurnia, who helps raise them. 
                Their mother died when Scout was very young, so Atticus is both a father and guide. 
                Scout talks about her family’s background and describes Maycomb as a quiet, 
                old-fashioned town where life moves slowly.</P>
            </div>
            <div class="chapter">
                <h3 class="chapter-title">Chapter 2: First day of school </h3>
                <p>Scout recalls her first day of school. She is excited but soon disappointed. 
                Her teacher, Miss Caroline Fisher, is new to Maycomb and doesn’t understand the town’s ways.
                When Miss Caroline learns that Scout can already read and write (taught by Atticus at home), 
                she scolds Scout instead of praising her, telling her not to learn any more at home
                </p>
            </div>
        `
    },
     {
        id: 8,
        title: "Ramayan (The story of Maryada Purushottam)  ",
        author: "Maharishi Valmiki (known as Aadi Kavi)",
        genre: "Sanatan Literature",
        cover: "🚩🕉️",
        content: `
            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 1: Birth of Rama</h3>
                <p>King Dasharatha of Ayodhya had no children. After performing a great sacrifice,
                he was blessed with four sons: Rama (born to Queen Kaushalya), Bharata (to Kaikeyi),
                and twins Lakshmana & Shatrughna (to Sumitra). Rama, the eldest, was known for his righteousness,
                strength, and kindness.</p>
            </div>

            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 2: Rama Marries Sita</h3>
                <p>When Rama grew up, he joined a contest to lift and string the mighty bow of Lord Shiva.
                Only he could do it, and in doing so he won the hand of Sita, the princess of Mithila,
                daughter of King Janaka. Rama and Sita were married, and the people of Ayodhya were overjoyed.</p>
            </div>

            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 3: Kaikeyi's Boon and Rama's Exile</h3>
                <p>When Dasharatha grew old, he decided to make Rama the king.
                But Queen Kaikeyi, influenced by her maid, reminded Dasharatha of 
                the two boons he had promised her long ago. She demanded that Bharata
                be crowned king and Rama be exiled for 14 years. Dasharatha, heartbroken but
                bound by his word, agreed. Rama accepted calmly, Sita insisted on accompanying him,
                and Lakshmana too went with them. The king soon died of grief.</p>
            </div>

            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 4: Life in the forest</h3>
                <p>Rama, Sita, and Lakshmana lived in forests, meeting sages
                and protecting them from demons. In Ayodhya, Bharata refused 
                to be king in Rama’s place. Instead, he placed Rama’s sandals 
                on the throne and ruled as a caretaker, awaiting Rama’s return.</p>
            </div>

            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 5: Abduction Of Mata Sita</h3>
                <p>The demon king Ravana of Lanka heard of Sita’s beauty.
                With the help of a demoness Shurpanakha, he tricked the brothers.
                Disguised as a golden deer, his servant Maricha lured Rama away.
                When Sita was left alone, Ravana, disguised as a sage, kidnapped
                her and carried her away in his flying chariot. The vulture Jatayu tried to stop him but was killed.</p>
            </div>

            </div>
            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 6: Rama Meets Hanuman</h3>
                <p>Searching for Sita, Rama met the monkey king Sugriva and his
                devoted warrior Hanuman. Hanuman promised to help. He leapt across
                the ocean to Lanka, found Sita in Ashok Vatika (a garden where Ravana kept her captive),
                gave her Rama’s ring, and reassured her that Rama would come.</p>
            </div>

            </div>
            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 7: The Great War</h3>
                <p>Rama built a bridge of stones across the sea with the
                help of the monkey army (this is called Rama Setu). A mighty
                war followed between Rama’s forces and Ravana’s army.
                Many heroes fought: Lakshmana killed Ravana’s son Indrajit,
                 while Rama finally defeated and killed Ravana with the Brahmastra (divine weapon).</p>
            </div>

            </div>
            <div class="Chapter">
                <h3 class="Chapter-tittle">Chapter 8: The Great War</h3>
                <p>Sita was freed, and they returned to Ayodhya after 14 years.
                Rama was crowned king in a grand ceremony. His rule, known as Rama
                Rajya, was remembered as an age of peace, justice, and happiness.</p>
            </div>`
    },
    
];

let currentFilter = 'all';
let filteredBooks = [...books];

///initialize the site
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(books);
    setupSearchListener();
});

// display books in the grid
function displayBooks(booksToShow) {
    const grid = document.getElementById('booksGrid');
    
    if (booksToShow.length === 0) {
        grid.innerHTML = '<div class="no-books">No books found matching your criteria.</div>';
        return;
    }
    
    grid.innerHTML = booksToShow.map(book => `
        <div class="book-card" onclick="openReader(${book.id})">
            <div class="book-cover">${book.cover}</div>
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-genre">${book.genre.charAt(0).toUpperCase() + book.genre.slice(1)}</div>
            <button class="read-btn" onclick="event.stopPropagation(); openReader(${book.id})">
                Read Now
            </button>
        </div>
    `).join('');
}

/// Filter books by genre
function filterBooks(genre) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    currentFilter = genre;
    
    if (genre === 'all') {
        filteredBooks = [...books];
    } else {
        filteredBooks = books.filter(book => book.genre === genre);
    }
    
    displayBooks(filteredBooks);
}

// search Functionality
function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredBooks = currentFilter === 'all' ? [...books] : books.filter(book => book.genre === currentFilter);
    } else {
        let searchResults = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
        
        if (currentFilter !== 'all') {
            searchResults = searchResults.filter(book => book.genre === currentFilter);
        }
        
        filteredBooks = searchResults;
    }
    
    displayBooks(filteredBooks);
}

// / Setup search input listener
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        /// Debounce search for better performance
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            searchBooks();
        }, 300);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBooks();
        }
    });
}

// Open book reader
function openReader(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    document.getElementById('readerTitle').textContent = book.title;
    document.getElementById('readerBody').innerHTML = book.content;
    document.getElementById('readerModal').style.display = 'block';
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

// Close book reader
function closeReader() {
    document.getElementById('readerModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close reader when clicking outside content
document.getElementById('readerModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeReader();
    }
});

// Close reader with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeReader();
    }
});

// Add some dynamic book covers for visual variety
function randomizeCoverGradients() {
    const covers = document.querySelectorAll('.book-cover');
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #91a7ff 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    ];
    
    covers.forEach(cover => {
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        cover.style.background = randomGradient;
    });
}

// Apply random gradients after books are loaded
setTimeout(randomizeCoverGradients, 100);
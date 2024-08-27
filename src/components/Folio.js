import React, { useState } from 'react';
import Modal from 'react-modal';
import './Folio.css';

const Folio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const syllabus = {
    'Java': (
      <div style={{width: '500px'}}>
        <h3 style={{  fontSize: '2em', }}>Java Syllabus</h3>
        <ul className="highlight-container" style={{paddingLeft: '20px'}}>
          <li>Introduction to JAVA Programming, Comparison with C and JAVA, JVM, JRE, JDK, Keywords in JAVA, Data types,
             Variables, Input and Output statements, Operators, JAVA Expressions & Blocks, Comments</li>
          <li>Condttions and Looping, For each loop, break, continue, Switch statements</li>
          <li>JAVA array, Multidimensional arrays, MCQs and Progra ms based on Array manipulation</li>
          <li>Methods, Types of Methods, Introduction to Strings</li>
          <li>String Methods, and Programs based on String Manipulation</li>
          <li>String, String Buffer, String Builder and their inbuilt methods</li>
          <li>Introduction to OOP, Class, Objects, Encapsulation, Inheritance, Polymorphism, Constructors, Copy Constructor, instance variables, Wrapper Class</li>
          <li>Implementing encapsulation using access modifiers and getter/setter methods, Types of Inheritance</li>
          <li>Interface and Abstract class, Introduction to Exception Handling</li>
          <li>Threading, Multi Threading, MCQs and Programsbased on OOPs</li>
          <li>Introduction to DSA, Collections, Array list and it's Methods</li>
          <li>Linked List, Singly , Doubly, Circular, Circular Doubly, Skip list</li>
          <li>Tree, Graph,Sorting and searching algorithms</li>
          <li>Pattern based problem solving</li>
          <li>pattern based Advanced problem solving</li>
          <li> Interview based problems</li>
          <li> Building strong foundation on Algorithms problems</li>
          <li>Solving interview based algorithm problems</li>
          <li>Solving leetcode and hackerrank medium and hard level problems</li>
          <li>Recall and mock technical interview</li>
        </ul>
      </div>
    ),
    'C': (
      <div>
        <h3 style={{  fontSize: '2em' }}>C Syllabus</h3>
        <ul className="highlight-container" style={{paddingLeft: '20px'}}>
          <li>Introduction to C language, Data Type and Variable</li>
          <li>Operators and Expressions</li>
          <li>Condition Statements and its implementation</li>
          <li>Looping Statements and its implementation</li>
          <li>Introduction to Arrays and its types with examples...</li>
          <li> One Dimensional Arrays and its examples</li>
          <li>Multi Dimensional Arrays and its examples</li>
          <li> Introduction to Strings and its implementations</li>
          <li> Problems based on Strings</li>
          <li>Introduction to Functions and its implementations</li>
          <li>Types of User Defined Functions and Implementations</li>
          <li>Recursion and its implementations</li>
          <li>Introduction to pointers</li>
          <li>Types of Pointers and its Implementations</li>
          <li> Introduction to Structure and union Pros and cons.</li>
          <li>Problems based on Pointers and Structure and union</li>
          <li> Implementation of Dynamic memory allocation</li>
          <li> File Handling Functions</li>
          <li>Introduction to Data Structures and types</li>
          <li> Linear Data Structures and its implementations</li>
        </ul>
      </div>
    ),
    'Python': (
      <div style={{}}>
        <h3 style={{  fontSize: '2em' }}>Python Syllabus</h3>
        <ul className="highlight-container" style={{paddingLeft: '20px'}}>
          <li>Introduction to Python, Data Types, Variables</li>
          <li>Operators and Expression</li>
          <li>Condition Statements and its implementations</li>
          <li>Looping Statements and its implementations</li>
          <li>Introduction to Arrays and its types with syntax implementations</li>
          <li>Introduction to numpy and its examples</li>
          <li>problem solving using numpy and its examples</li>
          <li>Introduction to Strings and its implementations</li>
          <li>Problems based on Strings</li>
          <li> Introduction to Functions and its implementations</li>
          <li> Types of User Defined Functions and Implementations</li>
          <li>Recursion and its implementations</li>
          <li>Introduction to OOP, Class, Objects, Encapsulation, Inheritance, Polymorphism, Constructors, Copy Constructor, instance variables, Wrapper Class</li>
          <li>Implementing encapsulation using access modifiers and getter/setter methods, Types of Inheritance</li>
          <li>Abstract class, Introduction to Exception Handling</li>
          <li> Problems based on oops and exception handling</li>
          <li> Introduction to threading and multi threading and solving problems based on threading</li>
          <li>File Handling Functions</li>
          <li>Introduction to Data Structures and types</li>
          <li>Linear Data Structures and its implementations</li>
        </ul>
      </div>
    ),
    'AI': (
      <div >
        <h3 style={{ fontSize: '2em' }}>AI Syllabus</h3>
        <ul className="highlight-container" style={{paddingLeft: '20px'}}>
          <li>Introduction to AI - Definition and scope of AI, History and evolution of AI, Applications of AI in various industries, Overview of AI subfields (ML, NLP, CV, Robotics)</li>
          <li>AI Programming Basics - Introduction to Python for AI, Libraries for AI: NumPy, Pandas, Matplotlib, Basic programming concepts: Loops, Conditionals, Functions</li>
          <li>Problem Solving with AI - Problem formulation in AI, Search algorithms: DFS, BFS, A*, Constraint Satisfaction Problems (CSPs)</li>
          <li>Knowledge Representation and Reasoning - Logic in AI: Propositional and Predicate Logic, Inference techniques, Ontologies and semantic networks</li>
          <li>Machine Learning Basics - Introduction to Machine Learning, Types of Machine Learning: Supervised, Unsupervised, Reinforcement Learning, Algorithms: Linear Regression, k-NN, Decision Trees</li>
          <li>Neural Networks and Deep Learning - Introduction to Neural Networks, Perceptrons and Multilayer Perceptrons (MLP), Basics of Deep Learning</li>
          <li>Natural Language Processing (NLP) - Introduction to NLP, Text preprocessing techniques, Sentiment analysis and text classification</li>
          <li>AI Ethics and Future - Ethical considerations in AI, Bias and fairness in AI, The future of AI: Trends and challenges</li>
          <li>Supervised Learning Techniques - Linear models: Linear and Logistic Regression, Decision Trees and Random Forests, Support Vector Machines (SVMs)</li>
          <li>Unsupervised Learning Techniques - Clustering algorithms: k-Means, Hierarchical clustering, Dimensionality reduction: PCA, t-SNE, Anomaly detection techniques</li>
          <li>Neural Networks and Backpropagation - Introduction to Artificial Neural Networks, Activation functions and loss functions, Training Neural Networks: Backpropagation and Gradient Descent</li>
          <li>Deep Learning Architectures - Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs) and LSTMs, Transfer Learning</li>
          <li>Reinforcement Learning - Introduction to Reinforcement Learning, Markov Decision Processes (MDPs), Q-learning and Deep Q Networks (DQNs)</li>
          <li>AI in Computer Vision - Image processing techniques, Object detection and recognition, Generative Adversarial Networks (GANs)</li>
          <li>AI Model Deployment - Model deployment strategies, Introduction to cloud platforms: AWS, GCP, Azure, RESTful APIs for AI models</li>
          <li>Capstone Project - End-to-end AI project development, Problem statement selection, Data collection, model development, and deployment, Presentation and documentation</li>
          <li>Advanced Machine Learning - Ensemble methods: Bagging, Boosting, and Stacking, Advanced feature selection and extraction techniques, Model interpretability: SHAP, LIME</li>
          <li>Deep Learning Techniques - Advanced CNN architectures: ResNet, Inception, EfficientNet, Autoencoders and Variational Autoencoders (VAEs), Sequence-to-sequence models</li>
          <li>Generative Models - Generative Adversarial Networks (GANs), Variants of GANs: CycleGAN, StyleGAN, Applications of GANs in art, video, and text generation</li>
          <li>Reinforcement Learning - Deep Reinforcement Learning, Policy Gradient methods: A2C, A3C, PPO, Applications in robotics and gaming</li>
          <li>Natural Language Processing (NLP) - Transformer models: BERT, GPT, T5, Advanced NLP tasks: Machine Translation, Summarization, Fine-tuning pre-trained models</li>
          <li>AI in Computer Vision - Object detection: YOLO, SSD, Faster R-CNN, Image segmentation: U-Net, Mask R-CNN, 3D vision and point clouds</li>
          <li>AI in Healthcare - AI for medical imaging and diagnostics, Predictive analytics in healthcare, AI in drug discovery and genomics</li>
          <li>AI in Finance - Algorithmic trading and AI, Risk modeling and fraud detection, AI for customer service and personalization</li>
          <li>AI Ethics and Governance - Ethical AI frameworks and guidelines, AI bias and fairness: Tools and techniques, AI governance and policy-making</li>
          <li>Explainable AI (XAI) - Introduction to XAI, Techniques for explainability: Saliency maps, Integrated Gradients, Case studies on explainability in critical applications</li>
          <li>AI for Social Good - AI applications in sustainability and climate change, AI for education and social welfare, Challenges in deploying AI for social impact</li>
          <li>Capstone Project - Proposal and development of an advanced AI project, Data gathering, model experimentation, and validation, Final presentation, documentation, and peer review</li>

        </ul>
      </div>
    ),
  };

  const openModal = (type) => {
    setModalIsOpen(true);
    if (syllabus[type]) {
      setContent(syllabus[type]);
    } else if (type === 'Technical') {
      setContent(
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', }}>
          <h3 style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, fantasy', fontSize: '2em' }}>Technical</h3>
          <p>Programming Language:</p>
          <button className="language-button" onClick={() => openModal('Java')}>Java</button>
          <button className="language-button" onClick={() => openModal('C')}>C</button>
          <button className="language-button" onClick={() => openModal('Python')}>Python</button>
          <button className="language-button" onClick={() => openModal('AI')}>AI</button>
          <p className="highlight-container">Program Highlight:</p>
          <ul className="highlight-container" style={{ paddingLeft: '20px' }}>
            <li>Problem Solving</li>
            <li>Algorithm Design and Analysis</li>
            <li>Data Structures</li>
            <li>Object-Oriented Programming</li>
            <li>Multithreading and Concurrency</li>
            <li>Memory Management</li>
            <li>Debugging and Testing</li>
            <li>Version Control with Git</li>
            <li>Dynamic Programming</li>
          </ul>
        </div>
      );
    }

    if (syllabus[type]) {
      setContent(syllabus[type]);
    } else if (type === 'Verbal') {
      setContent(
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, fantasy', fontSize: '2em', }}>Verbal</h3>
          <ul className="highlight-container" style={{ paddingLeft: '20px' }}>

  <li>Sentence sequence</li>
  <li>Error analysis</li>
  <li>Vocabulary</li>
  <li>Advance reading comprehension</li>
  <li>Articles</li>
  <li>Proposition</li>
  <li>Adverbs & Adjectives</li>
  <li>Parallelism</li>
  <li>Parts of speech</li>
  <li>Tenses</li>
  <li>Synonyms</li>
  <li>Antonyms</li>
  <li>One word substitution</li>
  <li>Subject Verb Agreement</li>
  <li>Types of voice & Speech</li>
  <li>Idioms and phrases</li>
  <li>Para jumbled</li>
  <li>Conditional clauses</li>
  <li>Auxiliary verbs</li>
          </ul>
        </div>
      );
    }

    if (syllabus[type]) {
      setContent(syllabus[type]);
    } else if (type === 'Aptitude') {
      setContent(
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ fontFamily: 'Copperplate, Copperplate Gothic Light, fantasy', fontSize: '2em' }}>Aptitude</h3>
         
          <ul className="highlight-container" style={{ paddingLeft: '20px' }}>
          
  <li>Number system</li>
  <li>Average, percentage, Ratio</li>
  <li>Profit & Loss</li>
  <li>Simple interest</li>
  <li>Compound interest</li>
  <li>Ages, partnership</li>
  <li>Time & work</li>
  <li>Pipe & systems</li>
  <li>Time & distance</li>
  <li>Boats</li>
  <li>Trains</li>
  <li>Permutations</li>
  <li>Combinations</li>
  <li>Probability</li>
  <li>Mensuration</li>
  <li>Obligation</li>
  <li>Mixtures & REASONING</li>
</ul>

        </div>
      );
    }
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
    setContent(null);
  };

  return (
    <>
      <main style={{ backgroundColor: 'white',paddingTop: '110px' }}>
        <ul id="cards" style={{ paddingTop: '' }}>
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2>Who is Pago</h2>
                <p>Pago is a leading innovator in the technology industry, specializing in providing cutting-edge solutions to complex problems. With a dedicated team of experts, Pago drives change and sets new standards in various sectors.</p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
                <h2>Why Pago</h2>
                <p>Pago stands out for its commitment to quality, innovation, and customer satisfaction. With a focus on delivering tailored solutions, Pago ensures that every client receives the best possible outcome, making it a trusted partner for businesses worldwide.</p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_3">
            <div className="card__content">
              <div>
                <h2>Pago's Solution</h2>
                <p>Pago's solution framework is designed to tackle the most challenging industry issues with ease. By integrating advanced technology and strategic planning, Pago delivers solutions that are both innovative and efficient.</p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_4">
            <div className="card__content">
              <div>
                <h2>What Pago can do</h2>
                <div className="small-cards" >
                  <div className="small-card" style={{backgroundColor: 'skyblue'}} onClick={() => openModal('Technical')}>
                    <h3>Technical</h3>
                  </div>
                  <div className="small-card" style={{backgroundColor: 'skyblue'}}onClick={() => openModal('Verbal')}>
                    <h3>Verbal</h3>
                  </div>
                  <div className="small-card" style={{backgroundColor: 'skyblue'}}onClick={() => openModal('Aptitude')}>
                    <h3>Aptitude</h3>
                  </div>
                </div>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_5">
            <div className="card__content">
              <div>
                <h2>Pago's history</h2>
                <p>Since its inception, Pago has been at the forefront of technological innovation. With a rich history of successes, Pago has grown from a small startup to a global leader, continuously pushing the boundaries of what is possible.</p>
              </div>
              <figure>
                <img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description" />
              </figure>
            </div>
          </li>
        </ul>
      </main>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Content"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        {content}
        <button onClick={closeModal} className="close-button">Close</button>
      </Modal>
    </>
  );
};

export default Folio;

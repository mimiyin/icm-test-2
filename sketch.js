let osc1, osc2;
let fft;
let mic;

function setup() {
  createCanvas(400, 400);
  
  // Create a sine-wave oscillator
	osc1 = new p5.Oscillator();
  osc1.setType('sine');
  // Set it to Orchestra A
  osc1.freq(440);
  osc1.start();
  
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  // Set it to Orchestra A
  osc2.freq(440);
  osc2.start();
  
  // Create an FFT analyzer
  fft = new p5.FFT();
  
  // Create a mic
  //mic = new p5.AudioIn();
  //mic.start();
  
  // Analyze the oscillator
  fft.setInput(osc2);
  
  // Analyze the mic
  //fft.setInput(mic);
}

function draw() {
  background(220);
  // Map the freq of osc to mouseX
  // From Orchestra A to 1 octave above
  let freq = map(mouseX, 0, width, 440, 880);
  osc2.freq(freq);
  text(freq, width/2, 100);
  
  // Visualize the fft bins
  let bins = fft.analyze();
  for (let b in bins) {
   let bin = bins[b];
    line(b, 0, b, bin);
  }
}
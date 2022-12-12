function redNeuronal(color) {
  // inicializar red neuronal
  var network = new brain.NeuralNetwork();

  // entrenarla
  network.train([
    {input: {rojo:0, verde:0, azul:0}, output: {color:1}},
    {input: {rojo:1, verde:1, azul:1}, output: {color:0}}
  ])

  // tomar el fondo actual elegido para usarlo de entrada a nuestra red neuronal
  var entrada = {
    rojo: color.r / 255,
    verde: color.g / 255,
    azul: color.b / 255
  }

  // obtener la prediccion
  var resultado = network.run(entrada)
  console.log(resultado)

  if (resultado.color > .5) hello.style.color = "white"
  else hello.style.color = "black"
}

function update(picker, selector) {
  document.querySelector(selector).style.background = picker.toBackground()
}

// triggers 'onInput' and 'onChange' on all color pickers when they are ready
jscolor.trigger('input change');

function fahrenheit(celsius) {
  celsius = celsius.valueAsNumber
  fahren = (celsius * (9/5)) + 32
  document.getElementById('fah').innerHTML = 'fahrenheit ' + fahren
  AI_celsius_fahrenheit(celsius)
}

function AI_celsius_fahrenheit(celsius) {
  var neuralNetwork = new brain.NeuralNetwork()

  neuralNetwork.train([
    {input: {in: 0}, output: {out: 32/256}},
    {input: {in: 7}, output: {out: 44.6/256}},
    {input: {in: 2}, output: {out: 35.6/256}},
    {input: {in: -49}, output: {out: -56.2/256}},
    {input: {in: 23}, output: {out: 73.4/256}},
    {input: {in: -17}, output: {out: 1.39/256}}
  ])

  let data = {
    in: celsius
  }
  let r = neuralNetwork.run(data)
  document.getElementById('ai_celsius').innerHTML = (r.out * 256)
}

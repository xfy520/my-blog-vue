export function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  var throttled = function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}

export function textInit(textNode){
  let text = '';
  const utils = {
    wait: (time) => {
      return new Promise(resolve => {
        setTimeout(resolve, time);
      })
    },
    getRandomInterval: () => {
      const randomInterval = 100 * Math.random();
      const msInterval = randomInterval < 50 ? 36 : randomInterval;
      return msInterval;
    }
  }

  const characterUtils = {
    pushCharacter: (character) => {
      text += character;
      textUtils.updateText();
    },
    popCharacter: () => {
      text = text.slice(0, text.length - 1);
      textUtils.updateText();
    },
    typeCharacter: (character) => {
      return new Promise(resolve => {
        const msInterval = utils.getRandomInterval();
        characterUtils.pushCharacter(character);
        utils.wait(msInterval).then(resolve);
      })
    },
    removeCharacter: () => {
      return new Promise(resolve => {
        const msInterval = utils.getRandomInterval();
        characterUtils.popCharacter();
        utils.wait(msInterval).then(resolve);
      })
    }
  }

  const textUtils = {
    updateText: () => {
      textNode.innerText = text;
    },
    clearText: () => {
      text = '';
      textUtils.updateText();
    },
    typeText: (text) => {
      return new Promise(resolve => {
        function _type(index){
          characterUtils.typeCharacter(text[index]).then(() => {
            if(index + 1 < text.length){
              _type(index + 1);
            }else{
              resolve();
            }
          })
        }
        _type(0);
      })
    },
    removeText: (amount) => {
      return new Promise(resolve => {
        function _remove(index){
          characterUtils.removeCharacter().then(() => {
            if(index + 1 < amount){
              _remove(index + 1);
            }else{
              resolve();
            }
          })
        }
        _remove(0);
      })
    }
  }
  function typeLoop(){
    textUtils.typeText('BiLiBiLi!')
    .then(() => utils.wait(2000))
    .then(() => textUtils.removeText(9))
    .then(() => textUtils.typeText('World!'))
    .then(() => utils.wait(2000))
    .then(() => textUtils.removeText(6))
    .then(typeLoop)
  }
  utils.wait(1000).then(() => {
    textUtils.clearText();
    typeLoop()
  })
}
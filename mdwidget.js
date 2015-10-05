function mdPreviewView(selector) {
  this.selector = $(selector);
}

mdPreviewView.prototype.draw = function(html) {
  this.selector.html(html);
}

function mdInputView(selector, notifier) {
  var notifiedController = notifier;

  this.selector = $(selector);

  $(selector).on('keyup', function(e) {
    notifiedController.keyUpSeen($(e.target).val());
  });
}

function mdController(inputSelector, destinationSelector) {
  this.sourceView = new mdInputView(inputSelector, this);
  this.destView = new mdPreviewView(destinationSelector);
}

mdController.prototype.keyUpSeen = function(mdText) {
  var html = marked(mdText)
  this.destView.draw(html)
}

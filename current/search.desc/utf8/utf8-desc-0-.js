searchState.loadedDescShard("utf8", 0, "Wraps a <code>std::io::BufRead</code> buffered byte stream and decode …\nCall the <code>incomplete_suffix.try_complete</code> method with more …\nIn lossy decoding insert <code>valid_prefix</code>, then <code>&quot;\\u{FFFD}&quot;</code>, …\nRepresents one UTF-8 error in the byte stream.\nAn I/O error from the underlying byte stream\nA push-based, lossy decoder for UTF-8. Errors are replaced …\nThe replacement character, U+FFFD. In lossy decoding, …\nFeed one chunk of input into the decoder.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReplace UTF-8 errors with U+FFFD\nCreate a new decoder from a callback.\nSame as <code>BufReadDecoder::next_strict</code>, but replace UTF-8 …\nDecode and consume the next chunk of UTF-8 input.\nThis is to <code>Read::read_to_string</code> what …\n<code>None</code>: still incomplete, call <code>try_complete</code> again with more …")
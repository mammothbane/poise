(function() {
    var type_impls = Object.fromEntries([["secrecy",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#152-161\">source</a><a href=\"#impl-Clone-for-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.CloneableSecret.html\" title=\"trait secrecy::CloneableSecret\">CloneableSecret</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#156-160\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#163-172\">source</a><a href=\"#impl-Debug-for-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"secrecy/trait.DebugSecret.html\" title=\"trait secrecy::DebugSecret\">DebugSecret</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#167-171\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Secret%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#262-272\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Secret%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#266-271\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(deserializer: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, D::<a class=\"associatedtype\" href=\"serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#174-182\">source</a><a href=\"#impl-Drop-for-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#178-181\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExposeSecret%3CS%3E-for-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#134-141\">source</a><a href=\"#impl-ExposeSecret%3CS%3E-for-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"secrecy/trait.ExposeSecret.html\" title=\"trait secrecy::ExposeSecret\">ExposeSecret</a>&lt;S&gt; for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.expose_secret\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#138-140\">source</a><a href=\"#method.expose_secret\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"secrecy/trait.ExposeSecret.html#tymethod.expose_secret\" class=\"fn\">expose_secret</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;S</a></h4></section></summary><div class='docblock'>Expose secret: this is the only method providing access to a secret.</div></details></div></details>","ExposeSecret<S>","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CS%3E-for-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#143-150\">source</a><a href=\"#impl-From%3CS%3E-for-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S&gt; for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#147-149\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(secret: S) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<S>","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Secret%3CS%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#122-132\">source</a><a href=\"#impl-Secret%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#127-131\">source</a><h4 class=\"code-header\">pub fn <a href=\"secrecy/struct.Secret.html#tymethod.new\" class=\"fn\">new</a>(secret: S) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Take ownership of a secret value</p>\n</div></details></div></details>",0,"secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Secret%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#275-285\">source</a><a href=\"#impl-Serialize-for-Secret%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"secrecy/struct.Secret.html\" title=\"struct secrecy::Secret\">Secret</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"secrecy/trait.Zeroize.html\" title=\"trait secrecy::Zeroize\">Zeroize</a> + <a class=\"trait\" href=\"secrecy/trait.SerializableSecret.html\" title=\"trait secrecy::SerializableSecret\">SerializableSecret</a> + <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/secrecy/lib.rs.html#279-284\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S::<a class=\"associatedtype\" href=\"serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","secrecy::boxed::SecretBox","secrecy::string::SecretString","secrecy::vec::SecretVec"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[14373]}
(function() {
    var implementors = Object.fromEntries([["dashmap",[["impl&lt;'a, K, V: 'a, S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, Q&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Q</a>&gt; for &amp;'a <a class=\"struct\" href=\"dashmap/struct.DashMap.html\" title=\"struct dashmap::DashMap\">DashMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;Q&gt; + 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    Q: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"]]],["hashbrown",[["impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;&amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;&gt; for &amp;<a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    A: Allocator,</div>"]]],["indexmap",[["impl&lt;T, S1, S2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;&amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S2&gt;&gt; for &amp;<a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S1&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    S1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,\n    S2: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,</div>"]]],["nonmax",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxI128.html\" title=\"struct nonmax::NonMaxI128\">NonMaxI128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxI16.html\" title=\"struct nonmax::NonMaxI16\">NonMaxI16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxI32.html\" title=\"struct nonmax::NonMaxI32\">NonMaxI32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxI64.html\" title=\"struct nonmax::NonMaxI64\">NonMaxI64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxI8.html\" title=\"struct nonmax::NonMaxI8\">NonMaxI8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxIsize.html\" title=\"struct nonmax::NonMaxIsize\">NonMaxIsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxU128.html\" title=\"struct nonmax::NonMaxU128\">NonMaxU128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxU16.html\" title=\"struct nonmax::NonMaxU16\">NonMaxU16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxU32.html\" title=\"struct nonmax::NonMaxU32\">NonMaxU32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxU64.html\" title=\"struct nonmax::NonMaxU64\">NonMaxU64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxU8.html\" title=\"struct nonmax::NonMaxU8\">NonMaxU8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"nonmax/struct.NonMaxUsize.html\" title=\"struct nonmax::NonMaxUsize\">NonMaxUsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxU128.html\" title=\"struct nonmax::NonMaxU128\">NonMaxU128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxU16.html\" title=\"struct nonmax::NonMaxU16\">NonMaxU16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxU32.html\" title=\"struct nonmax::NonMaxU32\">NonMaxU32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxU64.html\" title=\"struct nonmax::NonMaxU64\">NonMaxU64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxU8.html\" title=\"struct nonmax::NonMaxU8\">NonMaxU8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; for <a class=\"struct\" href=\"nonmax/struct.NonMaxUsize.html\" title=\"struct nonmax::NonMaxUsize\">NonMaxUsize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxU128.html\" title=\"struct nonmax::NonMaxU128\">NonMaxU128</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxU16.html\" title=\"struct nonmax::NonMaxU16\">NonMaxU16</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxU32.html\" title=\"struct nonmax::NonMaxU32\">NonMaxU32</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxU64.html\" title=\"struct nonmax::NonMaxU64\">NonMaxU64</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxU8.html\" title=\"struct nonmax::NonMaxU8\">NonMaxU8</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"nonmax/struct.NonMaxUsize.html\" title=\"struct nonmax::NonMaxUsize\">NonMaxUsize</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>"]]],["serenity",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/application/struct.ApplicationFlags.html\" title=\"struct serenity::model::application::ApplicationFlags\">ApplicationFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/application/struct.InteractionResponseFlags.html\" title=\"struct serenity::model::application::InteractionResponseFlags\">InteractionResponseFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/channel/struct.ChannelFlags.html\" title=\"struct serenity::model::channel::ChannelFlags\">ChannelFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/channel/struct.MessageFlags.html\" title=\"struct serenity::model::channel::MessageFlags\">MessageFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/gateway/struct.ActivityFlags.html\" title=\"struct serenity::model::gateway::ActivityFlags\">ActivityFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/gateway/struct.GatewayIntents.html\" title=\"struct serenity::model::gateway::GatewayIntents\">GatewayIntents</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.GuildMemberFlags.html\" title=\"struct serenity::model::guild::GuildMemberFlags\">GuildMemberFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.SystemChannelFlags.html\" title=\"struct serenity::model::guild::SystemChannelFlags\">SystemChannelFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/guild/struct.ThreadMemberFlags.html\" title=\"struct serenity::model::guild::ThreadMemberFlags\">ThreadMemberFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/monetization/struct.SkuFlags.html\" title=\"struct serenity::model::monetization::SkuFlags\">SkuFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/permissions/struct.Permissions.html\" title=\"struct serenity::model::permissions::Permissions\">Permissions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"serenity/model/user/struct.UserPublicFlags.html\" title=\"struct serenity::model::user::UserPublicFlags\">UserPublicFlags</a>"]]],["subtle",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"subtle/struct.Choice.html\" title=\"struct subtle::Choice\">Choice</a>"]]],["tokio",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"tokio/io/struct.Ready.html\" title=\"struct tokio::io::Ready\">Ready</a>"]]],["typenum",[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>"],["impl&lt;Rhs: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/bit/struct.B0.html\" title=\"struct typenum::bit::B0\">B0</a>"],["impl&lt;Ul: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Bl: <a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: PrivateAnd&lt;Ur&gt;,\n    PrivateAndOut&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, Ur&gt;: Trim,</div>"],["impl&lt;Ur: <a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a>&lt;Ur&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>"]]],["zerocopy",[["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I128.html\" title=\"struct zerocopy::byteorder::I128\">I128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I16.html\" title=\"struct zerocopy::byteorder::I16\">I16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I32.html\" title=\"struct zerocopy::byteorder::I32\">I32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.I64.html\" title=\"struct zerocopy::byteorder::I64\">I64</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U128.html\" title=\"struct zerocopy::byteorder::U128\">U128</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U16.html\" title=\"struct zerocopy::byteorder::U16\">U16</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U32.html\" title=\"struct zerocopy::byteorder::U32\">U32</a>&lt;O&gt;"],["impl&lt;O: <a class=\"trait\" href=\"zerocopy/byteorder/trait.ByteOrder.html\" title=\"trait zerocopy::byteorder::ByteOrder\">ByteOrder</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/bit/trait.BitAnd.html\" title=\"trait core::ops::bit::BitAnd\">BitAnd</a> for <a class=\"struct\" href=\"zerocopy/byteorder/struct.U64.html\" title=\"struct zerocopy::byteorder::U64\">U64</a>&lt;O&gt;"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[1577,1244,1366,7605,3799,267,268,2456,3365]}
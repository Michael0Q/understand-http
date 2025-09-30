/**
 * HTTP リクエストを実装を通じて理解するための演習セットです。
 *
 * 各課題は低レベルな HTTP ツールの振る舞いを模しています。周囲のガイド
 * ラインを参考にしながら、TODO を実装して完成させてください。
 */

export interface ParsedRequest {
  /** HTTP メソッド（例: "GET" や "POST" など）。 */
  method: string;
  /** リクエストラインのパスおよびクエリ文字列部分。 */
  target: string;
  /** HTTP バージョン文字列（例: "HTTP/1.1"）。 */
  version: string;
  /** 小文字に正規化されたヘッダー名と値の対応表。 */
  headers: Record<string, string>;
  /** 生のリクエストボディのバイト列。 */
  body: Uint8Array;
}

/**
 * 生の HTTP リクエストを構造化データへパースします。
 *
 * サーバーが受信したバイト列をどのように分解しているのかを追体験する課題
 * です。リクエストライン・ヘッダー・ボディが分離されている理由や、CRLF
 * ("\r\n") による区切りの役割を実感しましょう。
 *
 * 実装の流れ:
 * 1. "\r\n\r\n" を境にリクエストをヘッダー部とボディ部に分割する。
 * 2. リクエストラインから `method`、`target`、`version` を取り出す。
 * 3. 各ヘッダー行を最初の ":" で分割し、値の前後空白を削除したうえでヘッ
 *    ダー名を小文字にそろえる。
 * 4. 余裕があれば、先頭が空白の行を折り畳みヘッダーとして処理する。
 */
export function parseRequest(rawRequest: Uint8Array): ParsedRequest {
  // TODO: 上記の流れに沿って HTTP リクエストをパースする。
  throw new Error("Not implemented");
}

/**
 * 構造化された情報から生の HTTP リクエストを組み立てます。
 *
 * 手作業でリクエストを構築すると、ネットワークに送られるバイト列の並びが
 * はっきりと理解できます。ヘッダーの順序や必須ヘッダー（例: Host）、
 * Content-Length の導出がどのように絡むのかを確認しましょう。
 *
 * 実装のヒント:
 * - リクエストラインは `${method} ${target} ${version}` の形式で始める。
 * - ヘッダーは "Name: Value" 形式で連結し、区切りに "\r\n" を用いる。
 * - `body` が指定され Content-Length が未設定なら自動で追加する。
 * - ヘッダー部を空行で終え、その後にボディのバイト列を続ける。
 */
export function buildRequest(
  method: string,
  target: string,
  version: string,
  headers: Record<string, string>,
  body?: Uint8Array
): Uint8Array {
  // TODO: HTTP の各要素をシリアライズして生のリクエストを生成する。
  throw new Error("Not implemented");
}

/**
 * TCP ソケット越しに生の HTTP リクエストを送信し、レスポンスを受け取ります。
 *
 * HTTP メッセージを運ぶネットワーク層を体験する課題です。高レベルの
 * ライブラリではなく Node.js の `net` モジュールを直接使うことで、やり取り
 * の流れが可視化されます。
 *
 * 実装時に押さえておきたいポイント:
 * - `net.createConnection` を使うと TCP 接続の確立やタイムアウト設定が容易。
 * - HTTP レスポンスの長さは一定でないため、Content-Length や
 *   `Transfer-Encoding: chunked` を手がかりに読み取る量を判断する。
 * - サーバーによってはレスポンス送信後に接続を閉じたり、持続させたりする。
 *   初期実装ではソケットが閉じるまで読み続ける方針が現実的。
 * - タイムアウトを設け、待ち続けてしまう事態を避ける。
 */
export async function sendHttpRequest(
  host: string,
  port: number,
  request: Uint8Array,
  options: { timeoutMs?: number } = {}
): Promise<Uint8Array> {
  // TODO: `net.createConnection` で TCP ソケットを開き、送受信処理を実装する。
  throw new Error("Not implemented");
}

/**
 * `Transfer-Encoding: chunked` な HTTP レスポンスボディからチャンクを順に取り
 * 出します。
 *
 * チャンク転送符号化は、全体の長さを知らずにレスポンスをストリーミングす
 * るための重要な仕組みです。デコーダを実装することで、サーバーが各チャンク
 * をどのように区切っているのかが理解できます。
 *
 * 実装の概略:
 * - レスポンスをヘッダー部とボディ部に分割する。
 * - チャンクサイズ（16 進数）とチャンクデータ、末尾の "\r\n" を繰り返し解
 *   析する。
 * - サイズ 0 のチャンクに到達したら処理を終了し、必要に応じてトレーラー
 *   ヘッダーを扱う。
 */
export function* iterateChunkedBody(response: Uint8Array): Iterable<Uint8Array> {
  // TODO: チャンク転送されたボディをデコードし、各チャンクを順に返す。
  throw new Error("Not implemented");
}

/**
 * プロキシ、CDN、ロードバランサが HTTP で果たす役割を整理してまとめます。
 *
 * HTTP のインターミディアリを理解することは、実際のサービス運用で不可欠
 * です。調査を通じて、それぞれがリクエスト処理へどのような影響を与えるか
 * を簡潔に説明しましょう。
 */
export function explainIntermediaries(): [string, string, string] {
  // TODO: 3 種類のインターミディアリについて文章で説明をまとめる。
  throw new Error("Not implemented");
}

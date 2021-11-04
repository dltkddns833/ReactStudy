# ReactStudy
하루하루 알아보는 React

* 데이터가 변할 때마다 기존 뷰를 날려 버리고 처음부터 새로 렌더링하는 방식
* 오직 View만 신경 쓰는 라이브러리
* 지속적으로 데이터가 변화하는 대규모 애플리케이션을 구축할 때 매우 좋음

> npm 대신 yarn 사용

## JSX
* 반드시 부모 요소 하나로 감싸야함(Vuejs 랑 같음)
* div 요소를 사용하고 싶지 않을 때
```
<Fragment>
</Fragment>
<>
</>
```
* null 렌더링
```
{name == '리액트' && <h1>True</h1>}
```
* undefined 렌더링(Angular 때 항상 필요했던 것)
```
{name || '리액트'}
```